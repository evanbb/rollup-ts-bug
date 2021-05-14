import ts from "@wessberg/rollup-plugin-ts";
import fs from "fs";

const cache = fs.existsSync("rollup.cache.json")
  ? JSON.parse(fs.readFileSync("rollup.cache.json"))
  : undefined;

export default {
  cache,
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [ts()],
};
