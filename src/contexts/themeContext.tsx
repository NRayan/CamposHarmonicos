import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { dark, light } from "../theme";
import { ThemeProps } from "../types/theme";

type AuthContextData = {
    loading: Boolean;
    theme: ThemeProps;
    toogleTheme: () => void
}

type AuthProviderProps = {
    children: ReactNode
}

type ThemeStorage = "Dark" | "Light";

export const ThemeContext = createContext({} as AuthContextData);

export function ThemeContextProvider({ children }: AuthProviderProps) {

    const [theme, setTheme] = useState<ThemeProps>({} as ThemeProps);
    const [loading, setLoading] = useState(true);


    useEffect(() => { loadTheme() }, []);

    async function toogleContextTheme() {
        try {
            if (theme.name === "Dark") {
                setTheme(light)
                await AsyncStorage.setItem("USER_THEME", JSON.stringify("Light"));
            }
            else {
                setTheme(dark)
                await AsyncStorage.setItem("USER_THEME", JSON.stringify("Dark"));
            }

        } catch (error) {

        }
    }

    async function loadTheme() {
        const themeSelected = await AsyncStorage.getItem("USER_THEME");
        
        if (themeSelected) {
            setTheme(themeSelected === "Dark" ? dark : light);
        } else
            toogleContextTheme();

        setLoading(false);
    }

    return (
        <ThemeContext.Provider value={{ loading, theme, toogleTheme: toogleContextTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


