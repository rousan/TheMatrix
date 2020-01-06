require('dotenv').config();
const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');
const cors = require('cors');
const router = require('./routes');
const logger = require('./logger');
const Matrix = require('../matrix/matrix.server');
const { matrixName, matrixViewport } = require('./constants');

const app = express();
const server = http.createServer(app);
const io = SocketIO(server, { path: '/connect' });

io.on('connection', (socket) => {
  logger.info('New WebSocket connection received');
  socket.emit('matrixConfig', { name: matrixName, viewport: matrixViewport });
  socket.emit('changeMatrix', global.matrix.serialize());
});

app.use((req, res, next) => {
  logger.info(`${req.method.toUpperCase()} ${req.originalUrl}`);
  next();
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: +process.env.MAX_MSG_SIZE }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static(process.env.DIST || 'dist'));
app.use('/', router);

// eslint-disable-next-line
app.use((err, req, res, next) => {
  let statusCode = err.status;
  let statusMessage = err.message;
  if (!statusCode) {
    statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    statusMessage = HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR);
  }

  logger.error(`${statusCode}, ${err}`);

  res.status(statusCode);
  res.json({ message: statusMessage });
});

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3001;
server.listen(port, host, () => {
  logger.info(`Listening on ${host}:${port}`);

  const matrix = global.matrix = new Matrix('TheMatrix', matrixViewport);
  matrix.bootup((matrixChanges) => {
    io.emit('changeMatrix', matrixChanges);
  });
  logger.info(`${matrix.name} is up`);
});
