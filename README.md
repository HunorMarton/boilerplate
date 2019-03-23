# Boilerplate generator

## Dependencies

- Have [node](https://nodejs.org) on your computer.

## Initializing a React project

To create a new node project:

1. Move this project in folder named `boilerplate` next to your future project directory
2. Run `node boilerplate/react my-app`

This will:

- Initialize a project with `create-react-app` with `TypeScript`
- Sets up `prettier` and `eslint` with `Airbnb style guide`

### Options

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Effect                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--typescript`                                                                                         | Generates your project with TypeScript. Modifies linter accordingly. All the other dependencies you add via other options will be added with appropriate types, and the example files will be also in Typescript.                                                                                                                                     |
| `--storybook`                                                                                          | Adds [Storybook](https://storybook.js.org) to your project. If your project was generated with TypeScript then sets up Storybook's configuration files accordingly.                                                                                                                                                                                   |
| `--redux`                                                                                              | Adds [redux](https://redux.js.org), [redux-thunk](https://github.com/reduxjs/redux-thunk) and [reselect](https://github.com/reduxjs/reselect) to your dependencies (plus [typesafe-actions](https://github.com/piotrwitek/typesafe-actions) if your project was set up with TypeScript). Generates `createStore`, `rootReducer`, and an example duck. |
| `--socketio`                                                                                           | Adds [Socket.io](https://socket.io) to your project. Generates example files.                                                                                                                                                                                                                                                                         |

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
2. Run `node boilerplate/node my-app`

This will:

- Initialize a `package.json` and an entry file
- Sets up `prettier` and `eslint` with `Airbnb style guide`
- Adds `start` and `build scripts`

### Options

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Effect                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--typescript`                                                                                         | Generates your project with TypeScript. Modifies linter accordingly. All the other dependencies you add via other options will be added with appropriate types, and the example files will be also in Typescript.                                                                         |
| `--express`                                                                                            | Adds [Express](https://expressjs.com) to your project dependencies. Generates example code in the entry file.                                                                                                                                                                             |
| `--socketio`                                                                                           | Adds [Socket.io](https://socket.io) to your project dependencies. Generates example code in the entry file.                                                                                                                                                                               |
| `--mongodb`                                                                                            | Adds a `docker-compose.yml` file that spins up a MongoDB server (install [Docker](https://www.docker.com) and use `docker-compose up` to start it), adds [mongoose](https://mongoosejs.com) to the project dependencies, and modifies the entry file in order to connect to the database. |

---

Hunor
2019
