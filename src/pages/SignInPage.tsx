import React from 'react';
import SignIn from "../components/signIn/SignIn";


export interface ISignInPageProps {
    //children?: React.ReactNode,
}

const SignInPage = ({}: ISignInPageProps) => {

    return (
        <SignIn/>
        );
};


SignInPage.defaultProps = {};

export default SignInPage;