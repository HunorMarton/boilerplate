# Boilerplate generator

I never was a big fan of setting up things so I wrote some scripts that does it for me.

---

## Initializing a React project

To create a new node project:

1. Move this project in folder named `boilerplate` next to your future project directory
2. Run `node boilerplate/react:init.js my-app`

This will:

- Initialize a project with `create-react-app` with `TypeScript`
- Sets up `prettier` and `eslint` with `Airbnb style guide` and TypeScript support

Once you initialized a project you can use the generator file to add components (see: Using the generator file).

## Adding storybook to your React project

To add storybook to your react project:

1. Move this project in folder named `boilerplate` next to your future project directory
2. Run `node boilerplate/node:addstorybook.js my-app`

This will:

- Add `storybook` to your dependencies
- Rewrite your storybook configuration in order to make it work with Typescript

Once you added storybook the generator file will also generate stories for your components (see: Using the generator file).

## Adding redux to your React project

To add redux to your react project:

1. Move this project in folder named `boilerplate` next to your future project directory
2. Run `node boilerplate/node:addredux.js my-app`

This will:

- Add `redux`, `redux-thunk`, `reselect` and `typesafe-actions` to your dependencies
- Adds some boilerplate files in your `ducks` directory

Once you added redux you can use the generator file to add ducks (see: Using the generator file)..

## Using the generator file

Once you initialized project you will find an `add` file in your root directory.

You can use it to generate components the following way:

```shell
node add c componenet-name component-prop-1 component-prop-2 component-prop-3
```

You can also use it to generate a redux duck the following way:

```shell
node add d duck-name duck-action-1 duck-action-2 duck-action-3
```

---

## Initializing a node js project

To create a new node project:

1. Move this folder next to your future project directory
2. Run `node boilerplate/node:init.js my-app`

This will:

- Initialize a `package.json` and an entry file
- Sets up `TypeScript`
- Sets up `prettier` and `eslint` with `Airbnb style guide` and TypeScript support
- Adds `start` and `build scripts`

## Adding express to the node js project

To add express to the node js project:

1. Move this folder next to your future project directory
2. Run `node boilerplate/node:addexpress.js my-app`

This will:

- Add `express` to your dependencies
- Rewrite your entry file

---

For the used libraries I took these articles as a reference:

- https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a
- https://github.com/typescript-eslint/typescript-eslint

---

Hunor
2019
