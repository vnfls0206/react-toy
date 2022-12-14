 import React from 'react';
import {useMutation} from "react-query";
import {AxiosError, AxiosResponse} from "axios";
import {ISignInBodyData} from "../interface";
import authApi from "../service/api";
import {IMutationOption} from "../../reactQuery/interface";


export interface IUseSignOutProps extends IMutationOption<any, ISignInBodyData>{
    //children?: React.ReactNode,
}

const useSignOut = (
    {
        onSuccess,
        onError,
        options
    }: IUseSignOutProps
) => useMutation<AxiosResponse, AxiosError, ISignInBodyData>(
    ['auth/signOut'],
    (bodyData): Promise<any> => authApi.signOut(bodyData),
    {
        ...options,
        onSuccess: onSuccess,
        onError: onError,
        retry: false,
    },
)



export default useSignOut;