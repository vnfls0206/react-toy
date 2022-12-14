import React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';

const DefaultStyledDataGrid = (props: DataGridProps) => {

    return (
        <DataGrid
            {...props}
            sx={{
                border: 'none !important',

                '& .MuiDataGrid-columnHeaders': {
                    borderTop: '2px solid #bbc2c9',
                    borderBottom: '1px solid #bbc2c9',
                    backgroundColor: '#73c565',
                    borderRadius: '0px',
                    color: '#ffffffff',
                    fontWeight: '700'

                },

                '& .MuiDataGrid-columnHeader:focus': {
                    outline: 'none !important',
                },

                '& .MuiDataGrid-cell': {
                    whiteSpace: 'normal',
                    border: '1px solid #bbc2c9',

                    '&:focus-within':{
                        outline: 'none !important',
                    },
                    '&:hover':{
                        backgroundColor: 'none',
                    }
                },

                '& .MuiDataGrid-row': {

                    '&:nth-child(odd)': {
                        backgroundColor: '#F2F3F5'
                    },


                    '&:hover':{
                        backgroundColor: '#c8c9cbff !important',
                    },
                },

                '& .MuiDataGrid-cellCheckbox': {
                    border: '1px solid #bbc2c9 !important',
                },

                '& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator': {
                    display: 'none',
                },

                '& .MuiDataGrid-footerContainer': {
                    borderTop: '1px solid #bbc2c9',
                },
            }}
        />
    );
};

export default DefaultStyledDataGrid;