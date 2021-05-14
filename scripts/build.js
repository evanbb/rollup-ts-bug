const loadConfigFile = require("rollup/dist/loadConfigFile");
const rollup = require("rollup");
const path = require("path");
const fs = require("fs");

loadConfigFile(path.resolve("rollup.config.js")).then(async ({ options }) => {
  const bundle = await rollup.rollup(options[0]);
  fs.writeFileSync(
    "rollup.cache.json",
    JSON.stringify(bundle.cache),
    "utf-8"
  );
  await bundle.write(options[0].output[0]);
});
