import React from 'react';
import DataGridComponents from './DataGridComponents';
import StyledDataGrid from './StyledDataGrid';
import { IOptionalDataGridType } from './interface';


const OptionalDataGrid = (
    {
        ...props
    }: IOptionalDataGridType

) => {


    return (
        <StyledDataGrid
            {...props}
            components={DataGridComponents(
                {
                    ...props,

                })
            }
        />

    );
};

OptionalDataGrid.defaultProps = {
    className: "",
    title: "",
    disableColumnSelector: true,
    disableColumnFilter: true,
    density: 'compact',
    rowsPerPageOptions: [10, 20, 30, 50],
    autoHeight: true,
    autoPageSize: false,
    checkboxSelection: true,
    hideToolbarOption: false,
    searchable: true,
    searchMode: 'all',
    disableColumnMenu: true,
    hideFooterSelectedRowCount: true,
    hideFooterPagination: true,



    header: null,
    footer: null,
};

export default OptionalDataGrid;