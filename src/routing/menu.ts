import * as Path from './path';
import { AuthType } from '../modules/auth/interface';


export interface IMenuItem {
    title: string,
    path: string,
    icon: string,
    roles: string[],
    children: IMenuItem[],
}



const menu: IMenuItem[] = [
    {
        title: '홈',
        path: Path.HOME_PATH,
        icon: 'null',
        roles: [AuthType.ROLE_ADMIN, AuthType.ROLE_USER],
        children: [],
    },




]


export default menu;