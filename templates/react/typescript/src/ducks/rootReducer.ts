module.exports = () => `import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import duck1 from './duck1/reducer';

export interface State {
  duck1: StateType<typeof duck1>;
  // ...
}

const rootReducer = combineReducers({
  duck1,
  // ...
});

export default rootReducer;`;
