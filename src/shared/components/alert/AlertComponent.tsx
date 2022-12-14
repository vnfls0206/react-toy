import React from 'react';
import CustomStyledButton from '../button/component/CustomStyledButton';
import {Box, Button, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ColorOption } from '../button/interface';


export interface IAlertBoxProps {
    count: number
    children?: React.ReactNode,
}

export interface IAlertTitleProps {
    className: string,
    children?: React.ReactNode,
    onClose: () => void,
}

export interface IAlertContentsProps {
    children?: React.ReactNode,
}

export interface IAlertConfirmCancelButtonProps {
    onClose: () => void,
    onConfirm: () => void
}

export interface IAlertCancelEventButton {
    onClose: () => void,
    onCloseEvent?: () => void
}



const AlertComponent = {


    AlertBox: ({ children, count }: IAlertBoxProps) =>
        <Box
            className={'flex flex-col justify-start min-w-[30rem] w-auto min-h-[10rem] p-3 border border-solid rounded-sm border-zinc-400'}
            sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                marginLeft: 1.5 * count,
                marginTop: 1.5 * count,
                bgcolor: 'background.paper',
                transform: 'translate(-50%, -50%)',
                boxShadow: 24,
            }}
        >
            {children}
        </Box>
    ,
    Title: (props: IAlertTitleProps) => {
        const { children, onClose, className } = props;

        return (
            <Box className={'w-full min-h-[3rem] flex items-center justify-between ' + className}
                 id="customized-dialog-title"
            >

                <div className={'m-3 text-lg font-semibold'}>
                    {children}
                </div>

                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        className={'text-gray-400'}>
                        <CloseIcon fontSize={'medium'} />
                    </IconButton>
                ) : null}
            </Box>
        );
    },

    CenterTitle: (props: IAlertTitleProps) => {
        const { children, onClose, className } = props;

        return (
            <Box className={'w-full min-h-[3rem] flex items-center justify-between ' + className}
                 id="customized-dialog-title"
            >
                <IconButton
                    aria-label="close"
                    disabled
                    className={'text-gray-400 opacity-0'}>
                    <CloseIcon fontSize={'medium'} />
                </IconButton>
                <div className={'font-bold m-3 text-lg font-semibold'}>
                    {children}
                </div>

                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        className={'text-gray-400'}>
                        <CloseIcon fontSize={'medium'} />
                    </IconButton>
                ) : null}
            </Box>
        );
    },
    TextContents: ({children}: IAlertContentsProps) =>
        <div className={'whitespace-pre-wrap min-h-[3rem] h-auto pt-5 p-3 text-base font-medium text-gray-500'}>
            {children}
        </div>,

    Blank: () => <div className={'min-h-[3rem]'}/>,

    ConfirmCancelButton: ({ onClose, onConfirm }: IAlertConfirmCancelButtonProps) =>
        <div className={'border-t flex min-h-[4rem] items-center justify-end gap-x-2'}>
            <CustomStyledButton
                onClick={onClose}
                buttonText={'취소'}
                colorOption={ColorOption.BLACK}
            />
            <CustomStyledButton
                onClick={() => {
                    onConfirm();
                    onClose();
                }}

                buttonText={'확인'}
                colorOption={ColorOption.GREEN}
            />
        </div>,


    ConfirmButton: ({ onClose, onConfirm }: IAlertConfirmCancelButtonProps) =>
        <div className={'border-t flex min-h-[4rem] items-center justify-end gap-x-2'}>
            <CustomStyledButton
                onClick={() => {
                    onConfirm();
                    onClose();
                }}

                buttonText={'확인'}
                colorOption={ColorOption.GREEN}
            />
        </div>,
    CancelEventButton: ({onClose, onCloseEvent}: IAlertCancelEventButton ) =>
        <div className={'border-t flex min-h-[4rem] items-center justify-end gap-x-2'}>
            <CustomStyledButton
                onClick={() => {
                    onCloseEvent && onCloseEvent();
                    onClose();
                }}
                buttonText={'닫기'}
                colorOption={ColorOption.BLACK}
            />
        </div>,

};


export default AlertComponent;