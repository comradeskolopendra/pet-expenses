import { FC, MouseEventHandler } from "react";
import styles from "./button.module.css";

interface ButtonProps {
    type: "submit" | "reset" | "button";
    title: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    extraClassForButton?: string;
}

const Button: FC<ButtonProps> = ({ type, title, onClick, extraClassForButton }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={[styles.button, extraClassForButton].join(" ")}
        >
            {title}
        </button>
    )
};

export default Button;