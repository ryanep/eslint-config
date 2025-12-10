import fs from "node:fs/promises";
import eslintUnsafe from "eslint/use-at-your-own-risk";
import type { Config } from "eslint/config";

const configPath = "./src/configs";

const main = async () => {
  console.time();

  const configFiles = await fs.readdir(configPath);

  const builtinRules = eslintUnsafe.builtinRules.keys();
  const allRules = new Set<string>(builtinRules);
  const setRules = new Set<string>();

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
        const pluginRules = Object.keys(
          config.plugins?.[pluginName].rules ?? {}
        );

        for (const pluginRule of pluginRules) {
          const fullRuleName = `${pluginName}/${pluginRule}`;

          allRules.add(fullRuleName);
        }
      }
    }
  }

  console.log("Total rules:", allRules.size, "Set rules:", setRules.size);

  const unsetRules = [...allRules].filter(
    (rule) => ![...setRules].includes(rule)
  );

  const invalidRules = [...setRules].filter(
    (rule) => ![...allRules].includes(rule)
  );

  if (unsetRules.length > 0 || invalidRules.length > 0) {
    console.error("Unset rules:", unsetRules);
    console.error("Invalid rules:", invalidRules);

    console.timeEnd();
    throw new Error("Unset or invalid rules found.");
  }

  console.log("No unset rules.");
  console.timeEnd();
};

main().catch((error: unknown) => {
  console.error(error);
});
