import React from 'react';
import { Box } from '@mui/material';
import DefaultStyledDataGrid from './styled/DefaultStyledDataGrid';
import TestStyledDataGrid from './styled/TestStyledDataGrid';
import { IStyledDataGridType, StyledType } from './interface';
import QuestionStyledDataGrid from "./styled/QuestionStyledDataGrid";


const StyledDataGrid = (
    {
        styledType,

        ...props

    }: IStyledDataGridType
) => {

    const styledDataGrid = (styledType: string) => {
        if(styledType === StyledType.TEST) {
            return <TestStyledDataGrid {...props}/>
        } else if(styledType === StyledType.QUESTION){
            return <QuestionStyledDataGrid {...props}/>
        }
        else {
            return <DefaultStyledDataGrid {...props}/>
        }
    }

    return (
        <Box>
            {styledDataGrid(styledType!)}
        </Box>
    );
};

StyledDataGrid.defaultProps = {
    styledType: StyledType.DEFAULT
}


export default StyledDataGrid;