import React from 'react';
import {
    Table, TableBody, TableCell,
    TableHead, TableRow,
} from '@mui/material';
import StyledMuiTable from './styled/StyledMuiTable';
import { MuiEvent } from '@mui/x-data-grid';
import { ICustomColumnHeader, ICustomColumnRow } from './interface';




export interface ICustomColumnTableProps {
    header: Array<ICustomColumnHeader[]>,
    row:  Array<ICustomColumnRow[]>
}


const CustomColumnTable = (
    {
        header,
        row,
    }: ICustomColumnTableProps,
) => {




    return (
        <div className={'flex justify-center'}>
            <Table className={'px-2'} sx={StyledMuiTable} size={'small'}>
                <TableHead>
                    {header.map(row => <TableRow>
                        {row.map(item =>
                            <TableCell
                                className={item.className}
                                align={'center'}
                                colSpan={item.colSpan}
                                rowSpan={item.rowSpan}
                                width={item.widthRatio}
                            >
                                {item.content}
                            </TableCell>,
                        )}
                    </TableRow>)}
                </TableHead>
                <TableBody>
                    {row.map(index => <TableRow>
                        {index.map(item =>
                            <TableCell className={item.className}
                                       align={'center'}
                                       colSpan={item.colSpan}
                                       rowSpan={item.rowSpan}
                            >
                                {item.text}
                            </TableCell>,
                        )}
                    </TableRow>)}
                </TableBody>
            </Table>
        </div>

    );
};


CustomColumnTable.defaultProps = {};

export default CustomColumnTable;