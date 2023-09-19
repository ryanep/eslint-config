import { Linter } from "eslint";
import fs from "node:fs/promises";

const configPath = "./src";

const main = async () => {
  console.time();

  const configFiles = await fs.readdir(configPath);

  const builtInRules = [...new Linter().getRules().keys()];
  const allRules = new Set<string>(builtInRules);
  const setRules = new Set<string>();

  for (const configFile of configFiles) {
    const module = (await import(`../${configPath}/${configFile}`)) as Record<
      string,
      Linter.FlatConfig
    >;
    const configKey = Object.keys(module)[0];
    const config = module[configKey];

    const plugins = config.plugins ? Object.keys(config.plugins) : [];
    const rules = config.rules ? Object.keys(config.rules) : [];

    rules.forEach((rule) => setRules.add(rule));

    for (const plugin of plugins) {
      // @ts-expect-error -- Fix types
      const pluginRules = Object.keys(config.plugins[plugin].rules);

      for (const pluginRule of pluginRules) {
        const fullRuleName = `${plugin}/${pluginRule}`;

        allRules.add(fullRuleName);
      }
    }
  }

  console.log("Total rules:", allRules.size, "Set rules:", setRules.size);

  if (allRules.size !== setRules.size) {
    const unsetRules = [...allRules].filter(
      (rule) => ![...setRules].includes(rule)
    );
    const invalidRules = [...setRules].filter(
      (rule) => ![...allRules].includes(rule)
    );

    console.error("Unset rules:", unsetRules);
    console.error("Invalid rules:", invalidRules);

    console.timeEnd();
    return process.exit(1);
  }

  console.log("No unset rules.");
  console.timeEnd();
  return process.exit();
};

main().catch(console.error);
