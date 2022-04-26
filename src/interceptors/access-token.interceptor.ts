import { AxiosRequestConfig } from 'axios';
import { Interceptor } from '../interfaces/interceptor.intefrace';

const accessTokenInterceptor: Interceptor = {
  request: {
    onFulfilled(value: AxiosRequestConfig) {
      const accessToken = 'Vd6phDRvh6BDNbDGpzOLI1FxHorF12jK';
      value.headers['fr-access-token'] = accessToken;
      return value;
    },
  },
};
export default accessTokenInterceptor;
