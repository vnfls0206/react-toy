import React, { Dispatch, SetStateAction, useState } from 'react';
import { ITableQueryData } from './datagrid/interface';
import TableService from './service';


export interface IUseTableProps {
    //children?: React.ReactNode,
}

export interface ITableQuery {
    tableQueryData: ITableQueryData,
    setTableQueryData: Dispatch<SetStateAction<ITableQueryData>>,
}

export interface IUseTable {
    tableQueryData: ITableQueryData,
    setTableQueryData: Dispatch<SetStateAction<ITableQueryData>>,
    getPagingProps: ITableQuery
}

const useTable = ({}: IUseTableProps): IUseTable => {


    const [tableQueryData, setTableQueryData] = useState<ITableQueryData>(TableService.getDefaultTableQueryData);

    const getPagingProps: ITableQuery = {
        tableQueryData: tableQueryData,
        setTableQueryData: setTableQueryData
    }


    return { tableQueryData, setTableQueryData, getPagingProps};
};


useTable.defaultProps = {};

export default useTable;