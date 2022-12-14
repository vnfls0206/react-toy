export const AlertColor = {
    STANDARD: 'STANDARD',
    GREEN: 'GREEN',
    RED: 'RED',
    YELLOW:'YELLOW',

} as const;



export type AlertColor = typeof AlertColor[keyof typeof AlertColor];


export interface IAlertData {
    contents: (onClose: () => void) => JSX.Element,
    onCloseEvent?: () => void
}

export interface IAlertPropsData {
    contents: JSX.Element,
    onCloseEvent?: () => void
}

export interface ICancelAlertProps {
    title?: string,
    contents?: string | JSX.Element,

    onCancelEvent?: () => void,
    alertColor?: AlertColor,

}


export interface IConfirmAlertProps {
    title?: string,
    contents?: string | JSX.Element,

    onConfirm: () => void,
    alertColor?: AlertColor,

}