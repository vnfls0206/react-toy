import React from 'react';
import AuthService from "../modules/auth/service";
import useAuthStore from "../modules/auth/state";
import {Navigate} from "react-router-dom";


export interface IAuthenticatePageProps {
    children?: React.ReactNode,
}

const AuthenticatePage = (
    {
        children
    }: IAuthenticatePageProps
) => {


    const { data} = AuthService.getAuthenticated();




    return (
        <div>
            {data !== undefined &&
            (data ? children : <Navigate replace to={'/sign-in'}/>)
            }
        </div>
    );
};



export default AuthenticatePage;