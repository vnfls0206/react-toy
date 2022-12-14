import React, { Dispatch, SetStateAction } from 'react';
import { ITableQueryData, tableQueryDataObj } from '../../datagrid/interface';
import PaginationItem from '@mui/material/PaginationItem';
import { Pagination } from '@mui/material';


export interface ICustomPaginationProps {
    rowCount: number,

    tableQueryData: ITableQueryData,
    setTableQueryData: Dispatch<SetStateAction<ITableQueryData>>,
    onChange?: Function

}

const CustomPagination = (
    {
        rowCount,

        tableQueryData,
        setTableQueryData,
        onChange

    }: ICustomPaginationProps
) => {


    return (
        <div className={'w-full flex justify-center'}>
            <Pagination
                variant="outlined"
                shape="rounded"

                page={Number(tableQueryData.page) + 1}
                count={Math.trunc(rowCount / Number(tableQueryData.size)) + 1}
                // @ts-expect-error
                renderItem={(props2) => <PaginationItem
                    className={'bg-transparent border-none'}
                    {...props2}
                    disableRipple
                />}
                onChange={(event: React.ChangeEvent<unknown>, value: number) =>{
                    onChange && onChange();
                    setTableQueryData(pre => tableQueryDataObj({...pre, page: value - 1}))
                }}
            />
        </div>
    );
};



export default CustomPagination;