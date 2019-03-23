module.exports = ({ addAxios, addSocketIO }) => {
  let file = `import { action } from 'typesafe-actions';\n`;
  if (addAxios || addSocketIO)
    file += `import { Dispatch } from 'redux';
import { State } from '../rootReducer';\n`;
  if (addSocketIO) file += `import { emitEvent1 } from '../../api';\n`;

  file += `\n`;

  file += `export const ACTION1 = '@DUCK1/ACTION1';
export const ACTION2 = '@DUCK1/ACTION2';
//...

export const action1 = () => action(ACTION1, {});
export const action2 = () => action(ACTION2, {});
//...\n\n`;

  if (addSocketIO)
    file += `export const emitEvent = () => {
  return async (dispatch: Dispatch, getState: () => State) => {
    dispatch(action1());

    await emitEvent1({});

    dispatch(action2());
  };
};`;

  return file;
};
