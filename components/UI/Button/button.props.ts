import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export default interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    background: "white" | "rose";
    border?: "rose" | "none";
    children: ReactNode;
}
