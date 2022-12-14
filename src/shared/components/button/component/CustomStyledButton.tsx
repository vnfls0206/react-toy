import React from 'react';
import Button from '@mui/material/Button';
import { ColorOption } from '../interface';


export interface ICustomStyledButtonProps {
    colorOption: ColorOption,
    onClick?: () => void,
    buttonText: string,
    buttonType: ('button' | 'submit')
}


const CustomStyledButton = (
    {
        colorOption,
        onClick,
        buttonText,
        buttonType

    }: ICustomStyledButtonProps) =>
{

    const styledClassName = (colorOption: ColorOption): string => {

        if (colorOption === ColorOption.GREEN) {

            return 'text-white bg-[#1ABC9C] hover:bg-[#138D75]';

        } else if(colorOption === ColorOption.BLACK) {

            return 'bg-gray-600 text-white hover:bg-gray-600';
        }
        else {

            return 'bg-gray-600 text-white hover:bg-gray-600';
        }
    };


    return (
        <Button
            className={" border-white font-semibold py-2 px-2 ml-2 " + styledClassName(colorOption)}
            type={buttonType}
            onClick={onClick}
        >
            {buttonText}
        </Button>

    );
};


const defaultProps: ICustomStyledButtonProps = {

    colorOption: ColorOption.BLACK,
    onClick: () => null,
    buttonText: '',
    buttonType: 'button'
};


CustomStyledButton.defaultProps = defaultProps;

export default CustomStyledButton;