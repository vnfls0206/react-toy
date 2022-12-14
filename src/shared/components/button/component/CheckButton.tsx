import React from 'react';
import Button from "@mui/material/Button";
import {AlertColor} from "../../alert/interface/index";


export interface ICheckButtonProps {
    children?: React.ReactNode,
    onClick?: () => void,
    buttonText: string,
    buttonName?: string,
    buttonType: ('button' | 'submit')
}

const CheckButton = (
    {
        children,
        onClick,
        buttonText,
        buttonType,
        buttonName,
    }: ICheckButtonProps) => {

    const widthString = (buttonName: any): string | undefined =>
    {
        if(buttonName == 'AdminPassword') {
            return  ' w-full md:w-auto py-2 px-2';
        } else if(buttonName == 'IdCheck') {
            return ' w-full md:w-1/5  py-2.5 ';
        } else if(buttonName == 'UserPassword'){
            return ' w-full md:w-auto py-8 px-8';
        }else {

        }


    }

    return (
        <Button
            type={buttonType}
            className={"box-border self-start bg-[#1ABC9C] hover:bg-green-600 border-white text-white font-semibold " + widthString(buttonName)}
            onClick={onClick}
        >{buttonText}
        </Button>
    );
};


CheckButton.defaultProps = {};

export default CheckButton;