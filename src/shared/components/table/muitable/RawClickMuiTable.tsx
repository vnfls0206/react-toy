import React, { useState } from 'react';
import { IClickEventRaw, ICustomColumnHeader, ICustomColumnRow } from './interface';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import StyledMuiTable from './styled/StyledMuiTable';
import RawClickMuiTableStyle from './styled/RawClickMuiTalbeStyle';


export interface IRawClickMuiTableProps {
    header: Array<ICustomColumnHeader[]>,
    row:  Array<IClickEventRaw>
}

const RawClickMuiTable = (
    {
        header,
        row,
    }: IRawClickMuiTableProps) => {

    const [selectedRow, setSelectedRow] = useState<number | undefined>(undefined);


    return (
        <div className={'flex justify-center'}>
            <Table className={'px-2'} sx={RawClickMuiTableStyle} size={'small'}>
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
                    {row.map((index, count) => <TableRow
                        onClick={setSelectedRow.bind(this, count)}
                        onDoubleClick={index.rawClickEvent}
                        selected={selectedRow === count}
                    >
                        {index.data.map(item =>
                            <TableCell className={item.className}
                                       align={'center'}
                                       size={'medium'}
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


RawClickMuiTable.defaultProps = {};

export default RawClickMuiTable;