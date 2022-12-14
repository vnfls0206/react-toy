import React, { Dispatch, SetStateAction } from 'react';
import {DataGridProps, GridColDef, GridAlignment, GridRenderCellParams} from '@mui/x-data-grid';
import TableService from '../../service';
import {IUseTable} from "../../useTable";






export const headerObj = (
    filed: string,
    header: string,

    headerAline: GridAlignment | undefined,
    align: GridAlignment | undefined,

    sortable: boolean,
    filterable: boolean,

    flex: number,

    renderCell?: (param: GridRenderCellParams) => React.ReactNode

): GridColDef =>
    Object.freeze({
        field: filed,
        headerName: header,

        headerAlign: headerAline,
        align: align,

        sortable: sortable,
        filterable: filterable,

        flex: flex,
        renderCell: renderCell
    });

export type IRows<T> = Array<T & { id: number | string}>



export const GridSizeType = {
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE',

} as const;

export type GridSizeType = typeof GridSizeType[keyof typeof GridSizeType];


export const StyledType = {
    DEFAULT: 'DEFAULT',
    QUESTION: 'QUESTION',
    TEST: 'TEST',

} as const;

export type StyledType = typeof StyledType[keyof typeof StyledType];


export interface IReactDataGridPropsType extends IPagingDataPropsType {
    sizeType?: GridSizeType,

}


export interface IPagingDataPropsType extends IOptionalDataGridType {

}

export interface IOptionalDataGridType extends OptionalType {

    isCustomPagination?: boolean,
}

export type OptionalType = IDataGridComponentsOption & IStyledDataGridType;

export interface IDataGridComponentsOption {
    isCustomPagination?: boolean,
    footer? : JSX.Element,
}


export interface IStyledDataGridType extends DataGridProps {
    styledType?: string
}


export interface IQueryString {
    paging: string,
    filter: string
}

export interface ITableQueryData {
    filter: string,

    page: number,
    size: number,

    paging: string,

    queryString: string,


}

export const tableQueryDataObj = (
    { page, size, filter }: Omit<ITableQueryData, 'paging' | 'queryString'>,
): ITableQueryData =>
    Object.freeze({
        page: page,
        size: size,

        filter: filter,

        paging: TableService.getPaging(page, size),
        queryString: TableService.getPaging(page, size) + filter,
    });


/*Options*/





export const createValueOption = (obj: Object): Array<IValueOptions> => (
    Object.values(obj).map(value =>
        Object.freeze({ value: value, label: value }))
);


export const getLabel = (value: string, option: any) => {
    return option[value];
};

export interface IValueOptions {
    value: string,
    label: string,
}