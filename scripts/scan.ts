import fs from "node:fs/promises";
import { Linter } from "eslint";

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
    const [configKey] = Object.keys(module);
    const config = module[configKey];

    const pluginNames = config.plugins ? Object.keys(config.plugins) : [];
    const rules = config.rules ? Object.keys(config.rules) : [];

    for (const rule of rules) {
      setRules.add(rule);
    }

    for (const pluginName of pluginNames) {
      const pluginRules = Object.keys(config.plugins?.[pluginName].rules ?? {});

      for (const pluginRule of pluginRules) {
        const fullRuleName = `${pluginName}/${pluginRule}`;

        allRules.add(fullRuleName);
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

main().catch(console.error);
