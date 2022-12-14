import { AxiosError, AxiosResponse } from 'axios';
import { IQueryString } from '../../../shared/components/table/datagrid/interface';
import {InfiniteData, UseMutationOptions, UseQueryOptions} from 'react-query';


export interface IQuerySuccessError<T, F = unknown> {
    onSuccess?: (response: AxiosResponse<T>) => void,
    onError?: (error: AxiosError<F>) => void,
}


export interface IQueryOption<T, F = unknown> extends IQuerySuccessError<T, F>{
    options?: Omit<UseQueryOptions<AxiosResponse<T>,AxiosError<F>, AxiosResponse<T>, string[]>, 'queryKey' | 'queryFn'>
}


export interface IMutationOption<T, BodyData, F = unknown> extends IQuerySuccessError<T, F>{
    options?: Omit<UseMutationOptions<AxiosResponse<T>, AxiosError<F>, BodyData>, 'queryKey' | 'queryFn'>,
}

