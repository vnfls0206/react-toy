import React from 'react';
import {UseFormReturn} from "react-hook-form";
import {ISignInBodyData} from "../../modules/auth/interface";


export interface ISignInFormProps {
    form: UseFormReturn<ISignInBodyData>,
    onSignInSubmit: (data: ISignInBodyData) => void

}

const SignInForm = (
    {
        form,
        onSignInSubmit
    }: ISignInFormProps
) => {

    return (    //  해당 프로젝트에 맞게 변경해 주세요
       <form onSubmit={form.handleSubmit(data => onSignInSubmit({
            userId: 'aaa',
           userPassword:'bbbb'
       }))}>
            <div>{'로그인 페이지입니다.'}</div>
           <button>{'aaaa'}</button>
       </form>
    );
};


SignInForm.defaultProps = {};

export default SignInForm;