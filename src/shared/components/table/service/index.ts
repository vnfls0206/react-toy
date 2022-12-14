import {GridSizeType, IQueryString, ITableQueryData, tableQueryDataObj} from '../datagrid/interface';
import { getDefaultEndTime, getDefaultStartTime, getEndDay, getStartDay } from '../../../../modules/helpers/date';


const TableService = {

    getSizeClassName: (size: GridSizeType): string => {
        if (size === GridSizeType.SMALL) {
            return 'max-w-[72rem] w-[100%]';
        } else if (size === GridSizeType.MEDIUM) {
            return 'max-w-[124rem] w-[100%]';
        } else if (size === GridSizeType.LARGE) {
            return 'max-w-full w-[100%]';
        } else {
            return 'max-w-full w-[100%]';
        }
    },



    getPaging: (page: number | string, size: number | string): string => `page=${page}&size=${size}`,

    getDefaultTableQueryData: (): ITableQueryData => tableQueryDataObj({page: 0, size: 10, filter: ''}),

    getDefaultQueryString: (): IQueryString => {
        return {
            paging: 'page=0&size=10',
            filter: ''
        }
    },
    getQueryStringType: (queryString: IQueryString): string => (queryString.paging + queryString.filter),

    getDefaultQueryStringType: () => TableService.getQueryStringType(TableService.getDefaultQueryString()),

    /**
     * Log QueryString
     */
    getDefaultQueryLogString: (): IQueryString => {
        return {
            paging: '&page=0&size=40',
            //filter: `devId=All_FortiGate&start=2022-06-15 17:16:35&end=2022-08-01 17:16:35`,
            filter: `devId=All_FortiGate&start=${getStartDay()} ${getDefaultStartTime()}&end=${getEndDay()} ${getDefaultEndTime()}&filter=`,
        }
    },
    getQueryStringLogType: (queryString: IQueryString): string => (queryString.filter + queryString.paging),
    getDefaultQueryStringLogType: () => TableService.getQueryStringLogType(TableService.getDefaultQueryLogString()),
}


export default TableService;

