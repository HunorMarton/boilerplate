#! /usr/bin/env node

const fs = require("fs");
const execSync = require("child_process").execSync;

const name = process.argv[2];
if (!name) throw Error("You should provide a project name as an attribute");

console.log("Initialize project");
execSync(`sh boilerplate/react:addredux:pre.sh ${name}`);

const Action = `import { ActionType } from 'typesafe-actions';
import * as duck1Actions from './duck1/actions';
import * as duck2Actions from './duck2/actions';

type Action = ActionType<typeof duck1 | typeof duck2>;
export default Action;`;

fs.writeFileSync(`${name}/ducks/Action.ts`, Action);

const createStore = `import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default createStore(rootReducer, applyMiddleware(thunk));`;

fs.writeFileSync(`${name}/ducks/createStore.ts`, createStore);

const rootReducer = `import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import duck1 from './duck1/reducer';
import duck2 from './duck2/reducer';

export interface State {
  duck1: StateType<typeof duck1>;
  duck2: StateType<typeof duck2>;
}

const rootReducer = combineReducers({ duck1,  duck2 });

export default rootReducer;`;

fs.writeFileSync(`${name}/ducks/rootReducer.ts`, rootReducer);
