export type ThemeProps = {
    colors: {
        background: string,
        primary: string,
        text: string
    },
    fieldsColors:
    {
        primary: string,
        secondary: string,
        teriary: string
    },
    fonts: {
        400: string,
        500: string,
        600: string,
        700: string,
    },
    paddings: {
        horizontal: string,
        vertical: string,
    }
}

export const theme: ThemeProps =
{
	colors: {
		background: "#1B222F",
		primary: "#1E4DD6",
		text: "#FFF"
	},
	fieldsColors: {
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
};