import useAlertStore from '../state';
import { AlertColor, IAlertData, ICancelAlertProps, IConfirmAlertProps } from '../interface';
import AlertComponent from '../AlertComponent';
import React from 'react';


const AlertService = {

    getAlertCount: () => useAlertStore.getState().alertDataArray.length,

    getColorString: (alertColor: AlertColor): string =>
    {
        if(alertColor === AlertColor.STANDARD) {
            return  ' bg-transparent text-gray-500';
        } else if(alertColor === AlertColor.GREEN) {
            return ' bg-green-500 text-white';
        } else if (alertColor === AlertColor.RED) {
            return 'bg-red-500 text-white';
        } else if (alertColor === AlertColor.YELLOW) {
            return 'bg-yellow-400 text-white';
        }
        else {
            return ' bg-transparent text-gray-500';
        }


    },

    openContentsButtonAlert: ({ title, contents, onConfirm, alertColor = AlertColor.STANDARD }: IConfirmAlertProps) => {
        useAlertStore.getState().addAlert({
            contents: (onClose) =>
                <React.Fragment>
                    <AlertComponent.Title className={AlertService.getColorString(alertColor)} onClose={onClose}>{title}</AlertComponent.Title>
                    <AlertComponent.TextContents>{contents}</AlertComponent.TextContents>
                    <AlertComponent.ConfirmCancelButton onClose={onClose} onConfirm={onConfirm}/>
                </React.Fragment>,
        });

    },




    modifyAlert: ({contents, onCloseEvent}: IAlertData) =>
        useAlertStore.getState().modifyAlert({contents, onCloseEvent}),


    openButtonAlert: ({ title, onConfirm }: Omit<IConfirmAlertProps, 'contents'>) => {
        useAlertStore.getState().addAlert({
            contents: (onClose) =>
                <React.Fragment>
                    <AlertComponent.Title className={''} onClose={onClose}>{title}</AlertComponent.Title>
                    <AlertComponent.Blank/>
                    <AlertComponent.ConfirmCancelButton onClose={onClose} onConfirm={onConfirm}/>
                </React.Fragment>,
        });
    },
    openContentsAlert: ({ title, contents, alertColor = AlertColor.STANDARD }: Omit<IConfirmAlertProps, 'onConfirm'>) => {
        useAlertStore.getState().addAlert({
            contents: (onClose) =>
                <React.Fragment>
                    <AlertComponent.Title className={AlertService.getColorString(alertColor)} onClose={onClose}>{title}</AlertComponent.Title>
                    <AlertComponent.TextContents>{contents}</AlertComponent.TextContents>
                </React.Fragment>,
        });
    },

    openCancelEventAlert: ({ title, onCancelEvent, contents, alertColor = AlertColor.STANDARD }:ICancelAlertProps) => {
        useAlertStore.getState().addAlert({
            contents: (onClose) =>
                <React.Fragment>
                    <AlertComponent.Title className={AlertService.getColorString(alertColor)}
                                          onClose={() => {
                                              onClose();
                                              onCancelEvent && onCancelEvent();
                                          }}>{title}</AlertComponent.Title>
                    <AlertComponent.TextContents>{contents}</AlertComponent.TextContents>
                </React.Fragment>,
            onCloseEvent: onCancelEvent
        });
    },

    openConfirmAlert: ({ title, contents, onConfirm, alertColor = AlertColor.STANDARD }: IConfirmAlertProps) => {
        useAlertStore.getState().addAlert({
            contents: (onClose) =>
                <React.Fragment>
                    <AlertComponent.Title className={AlertService.getColorString(alertColor)} onClose={onClose}>{title}</AlertComponent.Title>
                    <AlertComponent.TextContents>{contents}</AlertComponent.TextContents>
                    <AlertComponent.ConfirmButton onClose={onClose} onConfirm={onConfirm}/>
                </React.Fragment>,
        });

    },




    openCancelEventButtonAlert: ({ title, contents, onCancelEvent, alertColor = AlertColor.STANDARD }: ICancelAlertProps) => {
        useAlertStore.getState().addAlert({
            contents: (onClose) =>
                <React.Fragment>
                    <AlertComponent.Title
                        className={AlertService.getColorString(alertColor)}
                        onClose={() => {
                            onClose();
                            onCancelEvent && onCancelEvent();
                        }}
                    >
                        {title}
                    </AlertComponent.Title>
                    <AlertComponent.TextContents>{contents}</AlertComponent.TextContents>
                    <AlertComponent.CancelEventButton onClose={onClose} onCloseEvent={onCancelEvent}/>
                </React.Fragment>,
            onCloseEvent: onCancelEvent
        });

    },

    openSubmitPasswordAlert: ({ title, contents, alertColor = AlertColor.STANDARD }: Omit<IConfirmAlertProps, 'onConfirm'>) => {
        useAlertStore.getState().addAlert({
            contents: (onClose) =>
                <React.Fragment>
                    <AlertComponent.CenterTitle
                        className={AlertService.getColorString(alertColor)}
                        onClose={() => {
                            onClose();
                        }}
                    >
                        {title}
                    </AlertComponent.CenterTitle>
                    <AlertComponent.TextContents>{contents}</AlertComponent.TextContents>
                </React.Fragment>,
        });

    },



    openProgressAlert: ({ title, contents, onConfirm }: IConfirmAlertProps) => {
        useAlertStore.getState().addAlert({
            contents: (onClose) =>
                <React.Fragment>
                    <AlertComponent.Title className={''} onClose={onClose}>{title}</AlertComponent.Title>
                    <AlertComponent.TextContents>{contents}</AlertComponent.TextContents>
                    <AlertComponent.ConfirmCancelButton onClose={onClose} onConfirm={onConfirm}/>
                </React.Fragment>,
        });
    },


};


export default AlertService;