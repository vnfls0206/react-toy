import axios, {
    AxiosInstance,
    AxiosInterceptorManager,
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
} from 'axios';
import useAuthStore from './auth/state';
import {queryClient} from '../app/ReactQueryContainer'
import {AuthType} from "./auth/interface";
import AuthService from "./auth/service";

type CustomAxiosRequestConfig = AxiosRequestConfig & {
    queryKey?: string[],
    noRepeat?: boolean,
};

interface CustomAxios extends AxiosInstance {
    interceptors: {
        request: AxiosInterceptorManager<CustomAxiosRequestConfig>;
        response: AxiosInterceptorManager<AxiosResponse>;
    };

    getUri(config?: CustomAxiosRequestConfig): string;

    request<T>(config: CustomAxiosRequestConfig): Promise<T>;

    get<T>(url: string, config?: CustomAxiosRequestConfig): Promise<T>;

    delete<T>(url: string, config?: CustomAxiosRequestConfig): Promise<T>;

    head<T>(url: string, config?: CustomAxiosRequestConfig): Promise<T>;

    options<T>(url: string, config?: CustomAxiosRequestConfig): Promise<T>;

    post<T>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<T>;

    put<T>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<T>;

    patch<T>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<T>;
}


const axiosInstance: CustomAxios = axios.create({
    withCredentials: true,
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    timeout: 20000,
});


axiosInstance.interceptors.request.use(
    function (config: CustomAxiosRequestConfig): CustomAxiosRequestConfig {
        const headers: AxiosRequestHeaders = {
            ...config.headers,
            Authorization: 'Bearer ' + useAuthStore.getState().accessToken,
        };

        config.headers = headers;
        config.withCredentials = true;

        return config;
    },
);


axiosInstance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        return response;
    },
    async error => {
        const originalRequest = {...error.config, noRepeat: true};


        if (error.response.data.message.includes('인증 오류시의 에러 메세지') &&        //  해당 프로젝트에 맞게 변경해 주세요
            error.config.noRepeat !== true) {

            await AuthService.axiosReissue()
                .then((response: any) => {
                        if (response.status === 200) {
                            if (error.config.queryKey) {
                                queryClient.resetQueries(error.config.queryKey).then(
                                    () => queryClient.refetchQueries(error.config.queryKey)
                                );


                            } else {
                                return axiosInstance(originalRequest);
                            }
                        }
                    }
                )
        }

        return Promise.reject(error);

    },
);

export default axiosInstance;