import axios from 'axios';

export const api = axios.create({
  baseURL: "http://final-web-server-production.up.railway.app",
  headers: {
    'Content-Type': 'application/json',
  }
});
