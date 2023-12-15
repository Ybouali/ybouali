import { ThemeType } from "./navBarTypes";

export interface InputCardType {
    mode: boolean;
    placeholder: string;
    type: string;
    value: string;
    name: string;
    onChanged: (e: any) => void;
}