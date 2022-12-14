import React from 'react';


export interface IStyledMuiTableProps {
    //children?: React.ReactNode,
}

function StyledMuiTable(
    {}: IStyledMuiTableProps,
) {


    return {
        border: 'none !important',
        tableLayout: 'fixed',
        wordBreak: 'keep-all',
        whiteSpace: 'pre-wrap',

        '& .MuiTableCell-head': {
            border: '1px solid #E4E4E7',


            backgroundColor: '#FAFAFA',
            color: '#000000',
            fontWeight: '700',
            fontSize: '0.7rem',


        },

        '& .MuiTableCell-body': {
            border: '1px solid #E4E4E7',

            borderRadius: '0px',
            color: '#000000',
            fontSize: '0.7rem',


        },




        '& .MuiTableRow-head': {
            border: '1px solid #E4E4E7',
        },

        '& .MuiTableRow-root': {
            backgroundColor: 'white',
            '&:hover':{
                backgroundColor: '#EEEFF1 !important',
            },

        },

        '& .Mui-selected, & .Mui-selected:hover': {
            backgroundColor: '#E6E7E9 !important',

        },


        '& .MuiTableBody-root': {
            border: '1px solid #E4E4E7',
        },

    };
};


StyledMuiTable.defaultProps = {};

export default StyledMuiTable;