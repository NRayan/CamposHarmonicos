import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { dark, light } from "../theme";
import { ThemeProps, ThemeType } from "../types/theme";

type ThemeContextData = {
    loading: Boolean;
    theme: ThemeProps;
    toogleTheme: (type: ThemeType) => void
}

type ThemeProviderProps = {
    children: ReactNode
}

type ThemeStorage =
    {
        theme: ThemeType
    };

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeProviderProps) {

    const [theme, setTheme] = useState<ThemeProps>({} as ThemeProps);
    const [loading, setLoading] = useState(true);

    useEffect(() => { loadTheme() }, []);

    async function toogleContextTheme(type: ThemeType) {
        try {
            if (theme.name === type) return;

            if (type === "Dark") {
                setTheme(dark)
                await AsyncStorage.setItem("USER_THEME", JSON.stringify({ theme: "Dark" } as ThemeStorage));
            }
            else {
                setTheme(light)
                await AsyncStorage.setItem("USER_THEME", JSON.stringify({ theme: "Light" } as ThemeStorage));
            }

            console.log("saved");
        } catch (error) {
            console.log(error)
        }
    }

    async function loadTheme() {

        const storage = await AsyncStorage.getItem("USER_THEME");

        if (storage) {
            const theme = JSON.parse(storage) as ThemeStorage
            setTheme(theme.theme === "Dark" ? dark : light);
        } else
            await toogleContextTheme("Dark");

        setLoading(false);
    }

    return (
        <ThemeContext.Provider value={{ loading, theme, toogleTheme: toogleContextTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


