const fs = require("fs");
const execSync = require("child_process").execSync;

module.exports = function(name, base) {
  console.log("Add packages");
  execSync(
    `sh boilerplate/common/add-eslint-and-prettier:pre.sh ${name} ${base}`
  );

  console.log("Creating .eslintrc.json");
  fs.writeFileSync(
    `${name}/.eslintrc.json`,
    JSON.stringify(
      {
        parser: "@typescript-eslint/parser",
        parserOptions: {
          project: "./tsconfig.json"
        },
        plugins: ["@typescript-eslint", "prettier"],
        extends: [
          "airbnb",
          "plugin:@typescript-eslint/recommended",
          "prettier",
          "prettier/@typescript-eslint"
        ],
        rules: {
          "prettier/prettier": ["error"]
        }
      },
      null,
      "\t"
    )
  );

  console.log("Creating .prettierrc");
  fs.writeFileSync(
    `${name}/.prettierrc`,
    JSON.stringify(
      {
        printWidth: 100,
        singleQuote: true
      },
      null,
      "\t"
    )
  );

  if (!base) {
    // By running `npx install-peerdeps --dev eslint-config-airbnb` `eslint` will be added to package.json file which is not okay for create-react-app
    fs.unlinkSync(`${name}/yarn.lock`);

    execSync(`cd ${name} && rm -rf node_modules`);

    var data = JSON.parse(fs.readFileSync(`${name}/package.json`, "utf-8"));
    delete data.devDependencies.eslint;
    fs.writeFileSync(`${name}/package.json`, JSON.stringify(data, null, "\t"));

    execSync(`cd ${name} && yarn`);
  }
};
