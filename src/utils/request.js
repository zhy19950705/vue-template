import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store';
import {getToken} from './auth';

const service = axios.create({
  baseUrl: process.env.BASE_API,
  timeout: 5000
});
