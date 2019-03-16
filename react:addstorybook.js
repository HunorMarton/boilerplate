const fs = require("fs");
const execSync = require("child_process").execSync;

const name = process.argv[2];
if (!name) throw Error("You should provide a project name as an attribute");

console.log("Add packages");
execSync(`sh boilerplate/react:addstorybook:pre.sh ${name}`);

console.log("Update storybook config to run on typescript");

const config = `import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);`;

fs.writeFileSync(`${name}/.storybook/config.js`, config);

const webpackconfig = `module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]]
    }
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};`;

fs.writeFileSync(`${name}/.storybook/webpack.config.js`, webpackconfig);

fs.renameSync(`${name}/src/stories/index.js`, `${name}/src/stories/index.tsx`);
