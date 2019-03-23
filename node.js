const fs = require("fs");
const execSync = require("child_process").execSync;
const addEslintAndPrettier = require("./common/add-eslint-and-prettier.js");

const [, , name, ...args] = process.argv;

if (!name) throw Error("You should provide a project name as an attribute");

const useTypeScript =
  args.includes("--typescript") || args.includes("--TypeScript");
const addExpress = args.includes("--express") || args.includes("--Express");
const addSocketIO = args.includes("--socketio") || args.includes("--socket.io");
const addMongoDB = args.includes("--mongodb") || args.includes("--MongoDB");

if (!useTypeScript) {
  // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
  console.log(
    "\x1b[41m \x1b[30m %s \x1b[0m",
    "This boilerplate generator is currently in beta version and supports only projects with Typescript. Add the `--typescript` option to generate a project with Typescript support"
  );
  return;
}

console.log("Initialize npm and add packages");
execSync(
  `sh boilerplate/node.sh ${name} ${useTypeScript} ${addExpress} ${addSocketIO} ${addMongoDB}`,
  { stdio: "inherit" }
);

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

if (addMongoDB) {
  const dockerCompose = require("./templates/node/typescript/docker-compose.ts");

  fs.writeFileSync(`${name}/docker-compose.yml`, dockerCompose());
}

if (useTypeScript) {
  console.log("Add entry file");

  const index = require("./templates/node/typescript/src/index.ts");

  fs.writeFileSync(
    `${name}/src/index.ts`,
    index({ addExpress, addSocketIO, addMongoDB })
  );
}
