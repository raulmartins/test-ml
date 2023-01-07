import axios from 'axios';
import { BFF_API } from './environment';

const BFF_API_CLIENT = axios.create({
  baseURL: BFF_API,
  timeout: 5000,
  headers: { 'Content-type': 'application/json' },
});

export default BFF_API_CLIENT;
