import {useMutation, useQuery} from 'react-query';
import authApi from '../../auth/service/api';
import {AxiosError, AxiosResponse} from 'axios';
import useAuthStore from '../../auth/state';
import {IMutationOption} from '../../reactQuery/interface';
import {AuthType, ISignInBodyData} from '../interface';

const AuthService = {



    getAuthenticated: () => {
        const queryFn = new Promise<boolean>( async (resolve) => {
            if (!useAuthStore.getState().authenticated) {                                                                   //인증 x
                if (AuthService.isTokenExpired('refresh', useAuthStore.getState().refreshTokenExpirationTime)) {    //refresh 토큰 X
                    resolve(false);
                } else {
                    if (AuthService.isTokenExpired(useAuthStore.getState().accessToken, useAuthStore.getState().accessTokenExpirationTime)) {   ///refresh 토큰 o access 토큰 x
                        await resolve(AuthService.reissue());    //reissue
                    } else {                                                                    ///refresh 토큰 o access 토큰 o
                        resolve(true);
                    }
                }
            } else {
                resolve(true);                                                          //인증 o -> 인증 됨
            }
        });


        return useQuery<boolean, unknown, boolean>(
            ['auth/getAuth'],
            (): Promise<boolean> => queryFn,
            {
                onSettled: (data, error) => {

                    useAuthStore.getState().setAuthenticated(data ? data : false)
                },
            });
    },


    axiosReissue: async (): Promise<any> =>
        await authApi.tokenReissue()
            .then((response: any) => {

                    useAuthStore.getState().setAccessToken({...response.data.data.token});
                    useAuthStore.getState().setAuthenticated(true);
                    return response;
                }
            )
            .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        useAuthStore.getState().setAuthenticated(false);
                        return error;
                    }
                    return error;
                },
            ),
    reissue: async (): Promise<boolean> =>
        await authApi.tokenReissue()
            .then((response: any) => {

                    useAuthStore.getState().setAccessToken({...response.data.data.token});
                    useAuthStore.getState().setAuthenticated(true);
                    return true;
                }
            )
            .catch((error) => {

                    if (error.response && error.response.status === 401) {
                        useAuthStore.getState().setAuthenticated(false);
                        return false;
                    }
                    return false;
                },
            ),


    isTokenExpired: (token: string, expireDate: number) => {
        const exp = expireDate;
        const now = new Date().getTime();


        if (exp === 0 && token === '') {
            return true;
        }
        if (now < exp) {
            return false;
        } else {
            return true;
        }
    },


    getAllAuthTypeAsArray: () => Object.values(AuthType).filter(auth => auth !== AuthType.ROLE_NONE),
    getNoneAuthTypeAsArray: () => Object.values(AuthType),
    IsNoneAuthTypeRoute: (roles: string[]) => roles.length === Object.values(AuthType).length,
    getAllAuthTypeAsArrayExcept: (authType: string) => Object.values(AuthType).filter(auth => auth !== authType),
    isAdmin: (role: string) => role === AuthType.ROLE_ADMIN,
    isUser: (role: string) => role === AuthType.ROLE_USER,
    isGuest: (role: string) => role === AuthType.ROLE_GUEST,
};

export default AuthService;