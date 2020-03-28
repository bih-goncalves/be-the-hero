import axios from 'axios';

const api = axios.create({
  baseURL: 'api.backend.dev:3333',
});

export default api;
