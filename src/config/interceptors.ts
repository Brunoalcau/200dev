import { AuthDTO } from '@/store/dto/get-store-auth';
import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  AxiosStatic,
  InternalAxiosRequestConfig,
} from 'axios';
import { storage } from './storage';

// Função de tratamento de requisição com InternalAxiosRequestConfig
const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  console.info(`[request] ${config.method?.toUpperCase()} ${config.url}`);
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error]`, error);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.info(`[response]`, response);
  return response;
};

const onRedirectLogin = () => {
  storage.removeData('token');
  storage.removeData('user');
  window.location.href = `/login?redirect=${window.location.pathname}`;
  console.info('[response] Redirecting to login');
};

const onValidationError = (error?: AxiosError) => {
  const data = error?.response?.data as any;
  const validationErrors = data?.detail;

  if (Array.isArray(validationErrors)) {
    const messages = validationErrors
      .map((err: any) => {
        const field = err.loc?.[1];
        const message = err.msg;
        return `${field}: ${message}`;
      })
      .join('\n');

    console.info(`[validation error] [${messages}]`);
    alert(`Erros de Validação: \n${messages}`);
  }
};

const errorHandler: Record<number, (error?: AxiosError) => void> = {
  403: onRedirectLogin,
  422: onValidationError,
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  const statusCode = error?.response?.status;
  if (statusCode && errorHandler[statusCode]) {
    // errorHandler[statusCode](error);
  }
  console.error(`[response error]`, error);
  return Promise.reject(error);
};

export function setupInterceptorsTo(axios: AxiosStatic): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL: '/api',
  });

  axiosInstance.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
      const token: AuthDTO = storage.getData('auth') || {
        state: null,
      };

      if (token.state) {
        request.headers.Authorization = `Bearer ${token?.state?.token}`;
      }
      return onRequest(request);
    },
    onRequestError
  );

  axiosInstance.interceptors.response.use(onResponse, onResponseError);

  return axiosInstance;
}
