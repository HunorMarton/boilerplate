module.exports = () => `import { ActionType } from 'typesafe-actions';
import * as duck1 from './duck1/actions';
//...

type Action = ActionType<typeof duck1 /*| typeof duck2*/>;
export default Action;`;
