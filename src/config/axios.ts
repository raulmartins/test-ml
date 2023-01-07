import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 1000,
  headers: { 'Content-type': 'application/json' },
});

export default instance;
