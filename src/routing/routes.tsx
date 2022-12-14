import React, {ReactComponentElement} from 'react';
import * as Path from './path';
import {Home,  SignInPage, NotFound} from './componentLoader';
import AuthService from '../modules/auth/service';

import {AuthType} from '../modules/auth/interface';


export interface IRoutes {
    title: string,
    path: string,
    component: ReactComponentElement<any>,
    roles: AuthType[],
    children: IRoutes[],
}


const routes: IRoutes[] = [
    {
        title: 'Home',
        path: Path.HOME_PATH,
        component: <Home/>,
        roles: [AuthType.ROLE_ADMIN, AuthType.ROLE_USER],
        children: [],
    },
    {
        title: 'SignIn',
        path: '/sign-in',
        component: <SignInPage/>,
        roles: AuthService.getNoneAuthTypeAsArray(),
        children: []
    },
    {
        title: 'Not Found',
        path: Path.All_PATH,
        component: <NotFound/>,
        roles: AuthService.getNoneAuthTypeAsArray(),
        children: [],
    },


];

export default routes;