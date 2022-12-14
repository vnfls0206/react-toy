import React from 'react';
import { Modal } from '@mui/material';
import AlertComponent from './AlertComponent';
import { AlertColor, IAlertPropsData } from '../alert/interface';


export interface IAlertProps {
    //children?: React.ReactNode,
    alertDataArray: Array<IAlertPropsData>,
    closeAlert: () => void,
}


const Alert = (
    {
        alertDataArray,
        closeAlert,

    }: IAlertProps,
) => {







    const handleClose = (onCloseEvent?: () => void) => {

        if(onCloseEvent){
            onCloseEvent();
            closeAlert();
        } else {
            closeAlert();
        }



    };

    return (
        <div>
            <Modal
                open={(alertDataArray.length > 0)}
                onClose={handleClose.bind(this, alertDataArray.at(-1)?.onCloseEvent)}
            >
                <React.Fragment>
                    {alertDataArray.map((value, index) =>
                        <AlertComponent.AlertBox key={index} count={index}>
                            {value.contents}
                        </AlertComponent.AlertBox>
                    )}
                </React.Fragment>

            </Modal>

        </div>
    );
};




Alert.defaultProps = {
};

export default Alert;