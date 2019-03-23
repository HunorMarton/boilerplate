module.exports = ({ addRedux, addSocketIO }) => {
  let file = `import React from 'react';
import ReactDOM from 'react-dom';\n`;
  if (addRedux) file += `import { Provider } from 'react-redux';\n`;
  if (addRedux) file += `import store from './ducks/createStore';\n`;
  if (addSocketIO)
    file += `import { setup as setupSocketIO } from './api/index';\n`;
  file += `import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';\n`;

  file += `\n`;

  if (addSocketIO && addRedux) file += `setupSocketIO(store);\n\n`;
  if (addSocketIO && !addRedux) file += `setupSocketIO();\n\n`;

  if (addRedux) {
    file += `ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);\n\n`;
  } else {
    file += `ReactDOM.render(<App />, document.getElementById('root'));\n\n`;
  }

  file += `// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();`;

  return file;
};
