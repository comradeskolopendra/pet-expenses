import { FC, MouseEventHandler, DetailedHTMLProps } from "react";
import styles from "./button.module.css";

interface ButtonProps {
    type: "submit" | "reset" | "button";
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    extraClassForButton?: string;
}

const Button: FC<DetailedHTMLProps<ButtonProps, HTMLButtonElement>> = ({ type, children, onClick, extraClassForButton }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={[styles.button, extraClassForButton].join(" ")}
        >
            {children}
        </button>
    )
};

export default Button;