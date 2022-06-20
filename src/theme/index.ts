import { ThemeDefaults, ThemeProps } from "../types/theme";

const defaultTheme: ThemeDefaults = {
    fieldsColors: {
        text:"#FFF",
        primary: "#14701D",
        secondary: "#B00623",
        teriary: "#B77716"
    },
    fonts: {
        "400": "Inter_400Regular",
        "500": "Inter_500Medium",
        "600": "Inter_600SemiBold",
        "700": "Inter_700Bold",
    },
    paddings: {
        horizontal: "5%",
        vertical: "8%"
    }
}

export const dark: ThemeProps = {
    ...defaultTheme,
    name:"Dark",
    colors: {
        background: "#1B222F",
        primary: "#1E4DD6",
        primaryText: "#FFF",
        text: "#FFF"
    },
}

export const light: ThemeProps = {
    ...defaultTheme,
    name:"Light",
    colors: {
        background: "#FFF",
        primary: "#1E4DD6",
        primaryText: "#FFF",
        text: "#1B222F"
    },
}