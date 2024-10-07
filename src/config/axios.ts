import axios from 'axios';
import { setupInterceptorsTo } from './interceptors';
export const instance = setupInterceptorsTo(axios);
