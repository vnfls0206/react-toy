import React from 'react';
import RouteService from '../../routing/helpers/routeService';

export interface IFooterProps {
    pathName: string
}

const Footer = (
    {
        pathName,
    }: IFooterProps,
) => {
    return (
        <>
            {!RouteService.IsNoneAuthPage(pathName) &&

            <footer>
            </footer>

            }
        </>
    );
};

export default Footer;