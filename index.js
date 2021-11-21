require('dotenv').config();
const {PORT = 4000} = process.env;
const express = require('express');
const server = express();
const morgan = require('morgan');

server.use(morgan('dev'));

server.use(express.json());

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

const apiRouter = require('./api');
server.use('/api', apiRouter);

server.use(express.static(path.join(__dirname, 'client', 'build')));
server.get('*', (req, res, next) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')));

const {client} = require('./db');
client.connect();

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});

