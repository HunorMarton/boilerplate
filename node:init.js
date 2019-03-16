const fs = require("fs");
const execSync = require("child_process").execSync;
const addEslintAndPrettier = require("./common/add-eslint-and-prettier.js");

const name = process.argv[2];
if (!name) throw Error("You should provide a project name as an attribute");

console.log("Initialize npm and add packages");
execSync(`sh boilerplate/node:init:pre.sh ${name}`);

(function() {
  console.log("Update package.json scripts");
  var data = JSON.parse(fs.readFileSync(`${name}/package.json`, "utf-8"));

  delete data.scripts;
  data.scripts = {
    start: "npm run build:live",
    build: "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
  };

  fs.writeFileSync(`${name}/package.json`, JSON.stringify(data, null, "\t"));
})();

addEslintAndPrettier(name, true);
