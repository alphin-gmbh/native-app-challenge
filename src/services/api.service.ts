import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import { Config } from 'react-native-config';

import { Interceptor } from '../interfaces/interceptor.intefrace';

const axiosInstance = axios.create({
  baseURL: 'https://testing.fe-challenge.alphin.io/v1/',
});

/**
 * Service for making http requests
 */
const apiService = {
  /**
   * Sends a GET request to an endpoint
   * @param url the endpoint
   * @param config the request config
   */
  get(url: string, config?: any): Promise<AxiosResponse<any>> {
    return axiosInstance.get(url, {
      params: config,
      paramsSerializer: (params: any) => qs.stringify(params),
    });
  },

  /**
   * Attaches an interceptor the axios instance
   * @param interceptor the interceptor to attach
   */
  attachInterceptor: (interceptor: Interceptor): void => {
    if (interceptor.request) {
      axiosInstance.interceptors.request.use(
        interceptor.request.onFulfilled,
        interceptor.request.onRejected,
      );
    }
  },
};
export default apiService;
