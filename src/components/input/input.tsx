import { FC, HTMLInputTypeAttribute, ChangeEventHandler } from "react";
import styles from "./input.module.css";

interface InputProps {
    value: string | number;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    type?: HTMLInputTypeAttribute;
    extraClassForBlock?: string,
    extraClassForInput?: string,
    name?: string;
}

const Input: FC<InputProps> = ({
    value,
    placeholder,
    onChange,
    type = "text",
    extraClassForBlock = "",
    extraClassForInput = "",
    name
}) => {
    return (
        <div className={[styles.wrapper, extraClassForBlock].join(" ")}>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={[styles.input, extraClassForInput].join(" ")}
                name={name}
            />
        </div>
    )
};

export default Input;