import React, { useEffect, useMemo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import routes from '../routing/routes';
import { getRoleRoute } from '../routing/helpers/getRoleRoute';
import AppLayout from '../components/layout/AppLayout';
import AuthService from '../modules/auth/service';
import useAuthStore from '../modules/auth/state';
import { AuthType } from '../modules/auth/interface';
import AuthenticatePage from "../pages/AuthenticatePage";

export interface IRoutesContainerProps {
    role: AuthType,
};

const RoutesContainer: React.FC<IRoutesContainerProps> = (
    {
        role,
    },
) => {



    const roleRoutes = useMemo(() =>
        getRoleRoute('/', role, routes), [role],
    );





    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    {roleRoutes.map(({ path, component, roles }) => (
                        AuthService.IsNoneAuthTypeRoute(roles) ?
                            <Route key={path} path={path} element={component} />
                            :
                            <Route key={path} path={path} element={<AuthenticatePage children={component}/>} />
                        ))}
                </Routes>
            </AppLayout>
        </BrowserRouter>
    );
};

export default RoutesContainer;