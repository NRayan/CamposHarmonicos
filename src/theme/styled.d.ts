/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";
import { ThemeProps as MyThemeProps } from "../types/theme";

declare module "styled-components" {
    export interface DefaultTheme extends MyThemeProps { }
}