#! /usr/bin/env node

const fs = require("fs");
const execSync = require("child_process").execSync;
const addEslintAndPrettier = require("./common/add-eslint-and-prettier.js");

const name = process.argv[2];
if (!name) throw Error("You should provide a project name as an attribute");

console.log("Initialize project");
execSync(`sh boilerplate/react:init:pre.sh ${name}`);

addEslintAndPrettier(name);

fs.copyFileSync("boilerplate/generators/react:add.js", `${name}/add`);
