import {IUseTable} from "../useTable";
import React from "react";

export interface ITable<T> {
    useTable: IUseTable,
    data: T[],
    totalRows: number
}



