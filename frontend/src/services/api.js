import axios from 'axios';

import { URL_BACKEND } from '../env.js';

const api = axios.create({
  baseURL: `${URL_BACKEND}`,
});

export default api;
