import React from "react";
import loadable from '@loadable/component';
import Loader from "../components/layout/Loader";
import {QueryClientProvider, QueryClient} from 'react-query';



const TailwindContainer = loadable(() => import('./TailwindContainer'), {fallback: <Loader/>});

export const queryClient: QueryClient = new QueryClient();

export default () => (
    <QueryClientProvider client={queryClient}>
        <TailwindContainer/>
    </QueryClientProvider>

);
