/* eslint-disable @typescript-eslint/no-empty-interface */
import { RoutesProps } from "./routes";

export declare global {
    namespace ReactNavigation {
        interface RootParamList extends RoutesProps { }
    }
}