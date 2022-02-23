import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios"

interface HData<T> {
  data: T,
  returnCode: string;
  success: boolean;
}

class HRequest {
  config: AxiosRequestConfig
  instance: AxiosInstance

  constructor(options: AxiosRequestConfig) {
    this.config = options
    this.instance = axios.create(options)
  }

  // 类型参数的作用，T决定AxiosResponse实例中data的类型
  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, HData<T>>(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({...config, method: "GET"})
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({...config, method: "POST"})
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({...config, method: "DELETE"})
  }

  patch<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({...config, method: "PATCH"})
  }
}



interface InterceptorHooks {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}
interface HRequestConfig extends AxiosRequestConfig {
  interceptorHooks?: InterceptorHooks;
}


export default HRequest