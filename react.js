#! /usr/bin/env node

const fs = require("fs");
const execSync = require("child_process").execSync;
const addEslintAndPrettier = require("./common/add-eslint-and-prettier.js");

const [, , name, ...args] = process.argv;

if (!name) throw Error("You should provide a project name as an attribute");

const useTypeScript =
  args.includes("--typescript") || args.includes("--TypeScript");
const addStorybook =
  args.includes("--storybook") || args.includes("--Storybook");
const addRedux = args.includes("--redux");
const addSocketIO = args.includes("--socketio") || args.includes("--socket.io");

if (!useTypeScript) {
  console.log(
    "\x1b[41m \x1b[30m %s \x1b[0m",
    "This boilerplate generator is currently in beta version and supports only projects with Typescript. Add the `--typescript` option to generate a project with Typescript support"
  );
  return;
}

console.log("Initialize project and install dependencies");
execSync(
  `sh boilerplate/react.sh ${name} ${useTypeScript} ${addStorybook} ${addRedux} ${addSocketIO}`,
  { stdio: "inherit" }
);

addEslintAndPrettier(name);

if (addStorybook) {
  if (useTypeScript) {
    console.log("Update storybook config to run on TypeScript");

    const config = require("./templates/react/typescript/.storybook/config");
    const webpackConfig = require("./templates/react/typescript/.storybook/webpack.config");

    fs.writeFileSync(`${name}/.storybook/config.js`, config());
    fs.writeFileSync(`${name}/.storybook/webpack.config.js`, webpackConfig());

    fs.renameSync(
      `${name}/src/stories/index.js`,
      `${name}/src/stories/index.tsx`
    );
  }
}

if (addRedux) {
  if (useTypeScript) {
    console.log("Generate initial files for Redux");

    const Action = require("./templates/react/typescript/src/ducks/Action.ts");
    const createStore = require("./templates/react/typescript/src/ducks/createStore.ts");
    const rootReducer = require("./templates/react/typescript/src/ducks/rootReducer.ts");
    const actions1 = require("./templates/react/typescript/src/ducks/duck1/actions.ts");
    const reducer1 = require("./templates/react/typescript/src/ducks/duck1/reducer.ts");

    fs.writeFileSync(`${name}/src/ducks/Action.ts`, Action());
    fs.writeFileSync(`${name}/src/ducks/createStore.ts`, createStore());
    fs.writeFileSync(`${name}/src/ducks/rootReducer.ts`, rootReducer());

    fs.mkdirSync(`${name}/src/ducks/duck1`);
    fs.writeFileSync(
      `${name}/src/ducks/duck1/actions.ts`,
      actions1({ addSocketIO })
    );
    fs.writeFileSync(`${name}/src/ducks/duck1/reducer.ts`, reducer1());
  }
}

if (addSocketIO) {
  if (useTypeScript) {
    console.log("Generate initial files for SocketIO");

    const api = require("./templates/react/typescript/src/api/index.ts");

    fs.writeFileSync(
      `${name}/src/api/index.ts`,
      api({ addRedux, addSocketIO })
    );
  }
}

if (useTypeScript) {
  console.log("Add entry file");

  const index = require("./templates/react/typescript/src/index.ts");

  fs.writeFileSync(`${name}/src/index.tsx`, index({ addRedux, addSocketIO }));
}

fs.copyFileSync("boilerplate/generators/react:add.js", `${name}/add`);
