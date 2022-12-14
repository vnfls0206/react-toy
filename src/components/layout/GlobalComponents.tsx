import React from 'react';
import Alert from '../../shared/components/alert/Alert';
import useAlertStore from '../../shared/components/alert/state/index';

const GlobalComponents = () => {

    const {alertDataArray, ...alertProps } = useAlertStore();


    return (
        <div>
            <Alert alertDataArray={alertDataArray} {...alertProps} />
        </div>
    );
};

export default GlobalComponents;