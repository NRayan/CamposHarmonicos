export type ThemeColors =
    {
        colors:
        {
            background: string,
            primary: string,
            text: string
        }
    }

export type ThemeDefaults =
    {
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


export type ThemeProps = ThemeColors & ThemeDefaults