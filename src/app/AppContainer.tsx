import RoutesContainer from './RoutesContainer';
import Loader from '../components/layout/Loader';
import React, { useState } from 'react';
import useAuthStore from '../modules/auth/state';

/**
 * This is the main entry app component. Here we wll define the actual app layout
 * and locale provider
 *
 */

export interface IAppContainerProps {
}

const AppContainer: React.FC<IAppContainerProps> = (
    {}
) => {
    const loading = false;
    const role = useAuthStore(state => state.role);

    

    return (
        <>
            {loading && <Loader/>}
            <RoutesContainer role={role}/>
        </>
    );
};

export default AppContainer;