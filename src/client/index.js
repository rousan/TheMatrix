import io from 'socket.io-client';
import './style.css';
import Matrix from '../matrix/matrix.projection';

let matrix;

const socket = io({
  path: '/connect'
});

socket.on('connect', () => {
  console.log('WebSocket connection is open');
});

socket.on('matrixConfig', (data) => {
  matrix = new Matrix(data.name, data.viewport);
});

socket.on('changeMatrix', (changes) => {
  if (!matrix) {
    return;
  }

  matrix.update(changes);
});
