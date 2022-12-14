import React, { useEffect } from 'react';

import loadable from '@loadable/component';
import Loader from '../components/layout/Loader';
import { StyledEngineProvider } from '@mui/material/styles';

export  interface IThemeContext {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}





const AppContainer = loadable(() => import('./AppContainer'), {fallback: <Loader/>});


export default () => {

    const [theme, setTheme] = React.useState('dark')
    const ThemeContext = React.createContext<IThemeContext>({theme, setTheme});

    const rawSetTheme = (theme: string) => {
        const root = window.document.documentElement
        const isDark = theme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(theme)
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme])



    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <StyledEngineProvider injectFirst>
                <AppContainer/>
            </StyledEngineProvider>
        </ThemeContext.Provider>
    );

}


