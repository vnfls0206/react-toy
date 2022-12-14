import create from 'zustand';
import { AlertColor, IAlertData, IAlertPropsData } from '../interface';

export interface IAlertState {

    alertDataArray: IAlertPropsData[],
    addAlert: ({contents}: IAlertData) => void,
    closeAlert: () => void,
    modifyAlert: ({ contents }: IAlertData) => void



};

const useAlertStore = create<IAlertState>()((set, get) => ({


    alertDataArray: [],

    addAlert: ({contents, onCloseEvent}: IAlertData) => {

        (document.activeElement as HTMLElement).blur();
        set((previousData) => ({
            ...previousData,
            alertDataArray: [...previousData.alertDataArray, {
                contents: contents(get().closeAlert),
                onCloseEvent: onCloseEvent
            }]})

        )
    },

    modifyAlert: ({contents, onCloseEvent}: IAlertData) => {
        (document.activeElement as HTMLElement).blur();
        set((pre) => ({
            ...pre,
            alertDataArray: [{
                contents: contents(get().closeAlert),
                onCloseEvent: onCloseEvent
            }]
        }))

    },

    closeAlert: () => {
        set((previousData) => ({
            ...previousData,
            alertDataArray: previousData.alertDataArray.slice(0, -1)
        }))

    }}),
);


export default useAlertStore;
