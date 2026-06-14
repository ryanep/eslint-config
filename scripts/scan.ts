import fs from "node:fs/promises";
import eslintUnsafe from "eslint/use-at-your-own-risk";
import type { Config } from "eslint/config";

const configPath = "./src/configs";

interface RuleMeta {
  deprecated?: { message?: string; url?: string } | boolean;
  replacedBy?: (
    | { plugin?: { name?: string }; rule?: { name?: string } }
    | string
  )[];
}

interface RuleModule {
  meta?: RuleMeta;
}

const main = async () => {
  console.time();

  const configFiles = await fs.readdir(configPath);

  const builtinRuleMap = eslintUnsafe.builtinRules;
  const allRules = new Set<string>();
  const setRules = new Set<string>();
  const ruleModuleMap = new Map<string, RuleModule>();

  for (const [name, rule] of builtinRuleMap) {
    allRules.add(name);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    ruleModuleMap.set(name, rule as RuleModule);
  }

  for (const configFile of configFiles) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    const eslintConfig = (await import(
      `../${configPath}/${configFile}`
    )) as Record<string, Config[]>;

    const [configKey] = Object.keys(eslintConfig);
    const configs = eslintConfig[configKey];

    for (const config of configs) {
      const pluginNames = config.plugins ? Object.keys(config.plugins) : [];
      const rules = config.rules ? Object.keys(config.rules) : [];

      for (const rule of rules) {
        setRules.add(rule);
      }

      for (const pluginName of pluginNames) {
        const plugin = config.plugins?.[pluginName];

        if (plugin?.rules) {
          for (const [pluginRule, ruleModule] of Object.entries(plugin.rules)) {
            const fullRuleName = `${pluginName}/${pluginRule}`;

            allRules.add(fullRuleName);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
            ruleModuleMap.set(fullRuleName, ruleModule as RuleModule);
          }
        }
      }
    }
  }

  console.table([
    {
      Count: allRules.size,
      Metric: "Total rules",
    },
    {
      Count: setRules.size,
      Metric: "Set rules",
    },
  ]);

  const unsetRules = [...allRules].filter((rule) => !setRules.has(rule));

  const invalidRules = [...setRules].filter((rule) => !allRules.has(rule));

  const deprecatedSetRules = [...setRules].filter((rule) => {
    const module = ruleModuleMap.get(rule);
    return module?.meta?.deprecated;
  });

  if (
    unsetRules.length > 0 ||
    invalidRules.length > 0 ||
    deprecatedSetRules.length > 0
  ) {
    if (deprecatedSetRules.length > 0) {
      console.error("Deprecated rules (non-fatal)");
      console.table(
        deprecatedSetRules.map((rule, index) => {
          const module = ruleModuleMap.get(rule);
          let replacement = "";

          if (module?.meta?.replacedBy) {
            const names = (
              Array.isArray(module.meta.replacedBy)
                ? module.meta.replacedBy
                : []
            )
              .map((r) =>
                typeof r === "string"
                  ? r
                  : (r.rule?.name ?? r.plugin?.name ?? "")
              )
              .filter(Boolean);

            if (names.length > 0) {
              replacement = ` (replaced by: ${names.join(", ")})`;
            }
          }

          return { Index: index + 1, Rule: rule + replacement };
        })
      );
    }

    if (unsetRules.length > 0 || invalidRules.length > 0) {
      if (unsetRules.length > 0) {
        console.error("Unset rules");
        console.table(
          unsetRules.map((rule, index) => ({ Index: index + 1, Rule: rule }))
        );
      }

      if (invalidRules.length > 0) {
        console.error("Invalid rules");
        console.table(
          invalidRules.map((rule, index) => ({ Index: index + 1, Rule: rule }))
        );
      }

      console.timeEnd();
      throw new Error("Unset or invalid rules found.");
    }
  }

  console.log("No unset rules.");
  console.timeEnd();
};

main().catch((error: unknown) => {
  console.error(error);
});
