import axios from 'axios';

const api = axios.create({
   baseUrl: 'http://localhost:3333' // TODO React com CORS: corrigir bug
});

export default api;
