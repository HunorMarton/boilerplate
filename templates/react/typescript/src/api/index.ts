module.exports = ({ addRedux, addAxios, addSocketIO }) => {
  let file = ``;
  if (addSocketIO) file += `import io from 'socket.io-client';\n`;
  if (addRedux)
    file += `import { Store } from 'redux';
import { action1 } from '../ducks/duck1/actions';\n`;

  file += `\n`;

  if (addSocketIO) {
    file += `export const socket: SocketIOClient.Socket = io('localhost:3000');\n\n`;

    if (addRedux) {
      file += `export const setup = (store: Store) => {
  // Event from server
  socket.on('event1', ({}) => {
    //...
    store.dispatch(action1());
  });
  //...
}\n\n`;
    } else {
      file += `export const setup = () => {
  // Event from server
  socket.on('event1', ({}) => {
    //...
  });
  //...
}\n\n`;
    }

    file += `export const emitEvent1 = (data: any) =>
  new Promise((resolve, reject) =>
    // Event to server
    socket.emit('event1', data, resolve)
  );\n`;
  }

  return file;
};
