import React, { useCallback } from 'react';
import {GridOverlay, GridSlotsComponent} from '@mui/x-data-grid';
import CustomPagination from '../component/shared/CustomPagination';

import CustomCheckBox from '../component/shared/CustomCheckBox';

import {IDataGridComponentsOption} from './interface';

import {tableContext} from '../Table';


const DataGridComponents = (
    {
        isCustomPagination,
        footer,
        ...props


    }: IDataGridComponentsOption

) : Partial<GridSlotsComponent> => {



    const {useStore} = tableContext;
    const setTableQueryData = useStore().setTableQueryData;


    return {
        Footer: footer ? () => footer : undefined ,
        BaseCheckbox: CustomCheckBox,
    };
};

DataGridComponents.defaultProps = {
    isCustomPagination: false,
}





export default DataGridComponents;