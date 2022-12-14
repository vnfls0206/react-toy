import React from 'react';
import RouteService from '../../routing/helpers/routeService'

export interface IHeaderProps {
    pathName: string
}

const Header = (
    {
        pathName
    } : IHeaderProps
) => {


    return (
        <header>
            {
                !RouteService.IsNoneAuthPage(pathName) &&
                <>
                </>
            }
        </header>
    );
};

export default Header;