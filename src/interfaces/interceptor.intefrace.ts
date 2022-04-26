import { AxiosRequestConfig } from 'axios';

/**
 * The point at which the interceptor acts
 */
export interface InterceptionPoint {
  onFulfilled?: (value: AxiosRequestConfig) => any | undefined;
  onRejected?: (error: any) => any | undefined;
}

/**
 * Default interface for all interceptors
 */
export interface Interceptor {
  request?: InterceptionPoint;
  response?: InterceptionPoint;
}
