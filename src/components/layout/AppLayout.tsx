import React, { PropsWithChildren, ReactElement } from 'react';
import loadable from '@loadable/component';
import Loader from './Loader';
import { useLocation } from 'react-router-dom';
import GlobalComponents from './GlobalComponents';

const Header = loadable(() => import('./Header'), { fallback: <Loader /> });
const Footer = loadable(() => import('./Footer'), { fallback: <Loader /> });

export interface IAppLayoutProps {
    children: any
}

const AppLayout = ({ children }: PropsWithChildren<IAppLayoutProps>) => {
    const { pathname } = useLocation();


    return (
        <div>
            <div >
                <GlobalComponents/>
                <Header pathName={pathname}/>
                {children}
            </div>
            <Footer pathName={pathname}/>
        </div>
    );
};

export default AppLayout;


