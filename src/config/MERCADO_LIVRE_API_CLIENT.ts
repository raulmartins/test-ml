import axios from 'axios';
import { MERCADO_LIVRE_API } from './environment';

const MERCADO_LIVRE_API_CLIENT = axios.create({
  baseURL: MERCADO_LIVRE_API,
  timeout: 5000,
  headers: { 'Content-type': 'application/json' },
});

export default MERCADO_LIVRE_API_CLIENT;
