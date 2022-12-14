import React from 'react';
import useAuthStore from '../../modules/auth/state';
import SignInForm from "./SignInForm";
import {useNavigate} from "react-router-dom";
import {HOME_PATH} from "../../routing/path";
import {useForm} from "react-hook-form";
import {ISignInBodyData} from "../../modules/auth/interface";
import useSignIn from "../../modules/auth/hook/useSignIn";


export interface ISignInProps {
    //children?: React.ReactNode,
}


const SignIn = ({}: ISignInProps) => {

    const signInForm = useForm<ISignInBodyData>();
    const navigator = useNavigate();
    const { setAuthenticated, setAccessToken } =  useAuthStore();



    const signIn = useSignIn({
        onSuccess: response => {
            setAuthenticated(true);
            setAccessToken(
                {
                    ...response.data.data.token,
                });

            navigator(`${HOME_PATH}`);
        },
        onError: error => {

        }
    })


    const onSignInSubmit = (data: ISignInBodyData) => {
        signIn.mutate(data)
    }

    return (

        <SignInForm
            form={signInForm}
            onSignInSubmit={onSignInSubmit}
        />
    );
};


export default SignIn;