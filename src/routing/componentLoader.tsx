import React from 'react';
import loadable from '@loadable/component';
import Loader from "../components/layout/Loader";

export const Home = loadable(() => import('../pages/HomePage'), {fallback:<Loader/>});

 export const NotFound = loadable(() => import('../pages/NotFound'), {fallback: <Loader/>});
 export const SignInPage = loadable(() => import('../pages/SignInPage'), {fallback:<Loader/>});