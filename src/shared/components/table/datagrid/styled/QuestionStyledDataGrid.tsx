import React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';

const QuestionStyledDataGrid = (props: DataGridProps) => {

    return (
        <DataGrid
            {...props}
            sx={{
                border: 'none !important',
                //border: '1px solid #bbc2c9 !important',


                '& .MuiDataGrid-main': {
                    border: '1px solid #E6E6E6',
                },
                '& .MuiDataGrid-columnHeader': {
                    //borderTop: '1px solid #222222',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '0px',
                    borderBottom: '1px solid #E6E6E6',

                    color: 'black',
                    fontWeight: '700'

                },

                '& .MuiDataGrid-columnHeader:focus': {
                    outline: 'none !important',
                },

                '& .MuiDataGrid-cell': {
                    whiteSpace: 'normal',
                    //border: '1px solid #bbc2c9',

                    '&:focus-within':{
                        outline: 'none !important',
                    },
                    '&:hover':{
                        backgroundColor: 'none',
                    }
                },

                '& .MuiDataGrid-row': {

                    backgroundColor: '#FFFFFF !important',


                    '&:hover':{
                        backgroundColor: '#F2F2F2 !important',
                    },
                },

                '& .MuiDataGrid-cellCheckbox': {
                    //border: '1px solid #bbc2c9 !important',
                },

                '& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator': {
                    display: 'none',
                },

                '& .MuiDataGrid-footerContainer': {
                    //borderTop: '1px solid #bbc2c9',
                },
            }}
        />
    );
};

export default QuestionStyledDataGrid;