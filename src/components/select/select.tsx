import { ChangeEventHandler, FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { v4 as uuid } from "uuid";

import styles from "./select.module.css";

interface ISelect {
    options: string[];
    value: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    name: string;
}

const Select: FC<ISelect> = ({ options, value, onChange, name }) => {

    return (
        <select
            className={styles.select}
            value={value}
            onChange={onChange}
            name={name}
        >
            {
                options.map((element) => (
                    <option value={element} key={uuid()}>
                        {element}
                    </option>
                ))
            }
        </select>
    )
};

export default Select;