import { SIGN_IN_PATH } from '../path';
import { IQueryString } from '../../shared/components/table/datagrid/interface';


const RouteService =  {

    IsNoneAuthPage: (pathName: string) => {
        return pathName === SIGN_IN_PATH
    },

    getDefaultQueryString: (): IQueryString =>
    {
        return {
            paging: 'page=0&size=20',
            filter: ''
        }
    },




};



export default RouteService;