import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://localhost:44338',
  headers: {
    'Content-Type': 'application/json',
  }
});