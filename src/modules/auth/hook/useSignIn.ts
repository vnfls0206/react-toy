import React from 'react';
import {useMutation} from "react-query";
import {AxiosError, AxiosResponse} from "axios";
import {ISignInBodyData} from "../interface";
import authApi from "../service/api";
import {IMutationOption} from "../../reactQuery/interface";


export interface IUseSignInProps extends IMutationOption<any, ISignInBodyData>{
    //children?: React.ReactNode,
}

const useSignIn = (
    {
        onSuccess,
        onError,
        options
    }: IUseSignInProps
) => useMutation<AxiosResponse, AxiosError, ISignInBodyData>(
    ['auth/signIn'],
    (bodyData): Promise<any> => authApi.signIn(bodyData),
    {
        ...options,
        onSuccess: onSuccess,
        onError: onError,
        retry: false,
    },
)



export default useSignIn;