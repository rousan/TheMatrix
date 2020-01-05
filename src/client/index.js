import './style.css';
import axios from 'axios';

axios.get('/api/v1/ping')
  .then(({ data }) => {
    console.log(data);
  });
