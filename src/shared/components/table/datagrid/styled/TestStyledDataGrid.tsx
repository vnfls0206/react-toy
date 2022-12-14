import React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';

const TestStyledDataGrid = (props: DataGridProps) => {

    return (
        <DataGrid
            {...props}
            sx={{
                border: 'none !important',
                height: '50rem',
                disableColumnMenu: 'true',

                '& .MuiDataGrid-columnHeaders': {
                    borderTop: '2px solid #bbc2c9',
                    borderBottom: '1px solid #bbc2c9',
                    backgroundColor: 'whitesmoke',
                    borderRadius: '0px',
                },

                '& .MuiDataGrid-cell': {
                    whiteSpace: 'normal',
                },
                '& .MuiDataGrid-cell:focus-within': {
                    outline: 'none !important',
                },
                '& .MuiDataGrid-cell:hover': {
                    color: 'none',
                },

                '& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator': {
                    display: 'none',
                },
                '& .MuiDataGrid-row:hover': {
                    color: '#1976d2',
                },
                '& .MuiDataGrid-footerContainer': {
                    borderTop: '1px solid #bbc2c9',
                },
            }}
        />
    );
};

export default TestStyledDataGrid;