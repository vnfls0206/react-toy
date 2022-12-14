import React from 'react';
import OptionalDataGrid from './OptionalDataGrid';
import { IPagingDataPropsType } from './interface';


const PagingDataGrid = (
    {
        paginationMode,
        autoPageSize,

        ...props

    }: IPagingDataPropsType
) => {

    return (
        <OptionalDataGrid
            paginationMode={paginationMode}
            {...props}
        />
    );
};

PagingDataGrid.defaultProps = {
    paginationMode: 'server',
    currentPage: 0,
    pageSize: 20,
    autoPageSize: false
}


export default PagingDataGrid;