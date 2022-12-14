import React, {ReactElement} from 'react';
import CustomColumnTable from './muitable/CustomColumnTable';
import ReactDataGrid from './datagrid/ReactDataGrid';
import CustomPagination from './component/shared/CustomPagination';
import RawClickMuiTable from './muitable/RawClickMuiTable';
import {GridSizeType} from "./datagrid/interface";

import create , {StoreApi} from 'zustand'
import createContext from 'zustand/context'
import TableService from "./service";
import {ITableQuery} from "./useTable";


export interface ITableProps {
    children: React.ReactNode
    size?: GridSizeType,
    useTable: ITableQuery
}

export const tableContext = createContext<StoreApi<ITableQuery>>();


function Table(
    {
        children,
        size = GridSizeType.SMALL,
        useTable
    }: ITableProps) {



    const store = () =>
        create<ITableQuery>((get, set) => ({
            tableQueryData: useTable.tableQueryData,
            setTableQueryData: useTable.setTableQueryData
        }));




    return (
        <tableContext.Provider createStore={store}>
            <div className={'flex justify-center px-2'}>
                <div className={TableService.getSizeClassName(size)}>
                    {children}
                </div>
            </div>
        </tableContext.Provider>

    );
};


Table.CustomColumnTable = CustomColumnTable;
Table.RawClickMuiTable = RawClickMuiTable;
Table.DataGrid = ReactDataGrid;

Table.CustomPagenation = CustomPagination;

export {Table};
export {}