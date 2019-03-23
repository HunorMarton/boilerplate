module.exports = ({ addExpress, addSocketIO, addMongoDB }) => {
  let file = ``;
  if (addExpress)
    file += `import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';\n`;
  if (!addExpress && addSocketIO) file += `import express from 'express';\n`;
  if (addSocketIO) file += `import socketIO from 'socket.io;'\n`;
  if (addMongoDB) file += `import mongoose from 'mongoose';\n`;

  file += `\n`;

  if (addExpress || addSocketIO)
    file += `const port = 3000;
const app = express();
const server = app.listen(port, () => console.log(\`App listening on port \${port}!\`));\n`;

  if (addSocketIO) file += `const io = socketIO.listen(server);\n\n`;

  if (addMongoDB)
    file += `mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));\n\n`;

  if (addExpress)
    file += `// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));\n\n`;

  if (addSocketIO)
    file += `io.on('connection', (socket) => {
  console.log('a user connected');

  socket.emit('event to connected user', {});

  socket.on("event from connected user", (data: any, ack) => {
    socket.broadcast.emit("event to everyone else", {});
    ack({}); // Send back acknowledgements to client
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});\n`;

  return file;
};
