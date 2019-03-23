module.exports = () => `import Action from '../Action';
import * as actions from './actions';

interface State {
  //...
}

const initialState: State = {
  //...
};

export default function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case actions.ACTION1:
      return {
        ...state,
      };
    case actions.ACTION2:
      return {
        ...state,
      };
    default:
      return state;
  }
}`;
