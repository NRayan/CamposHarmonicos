import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, { ReactNode, useContext } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { ThemeContext } from './src/contexts';
import { Loading } from './src/screens';

type Props =
    {
        children: ReactNode
    }

export function ThemeRender({ children }: Props) {

    const { loading, theme } = useContext(ThemeContext);

    return (
        loading ?
            <Loading />
            :

            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
    );
}