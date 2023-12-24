import { FC, ChangeEvent } from "react";

import Input from "../../../../../components/input/input";
import Select from "../../../../../components/select/select";

import { IFormData } from "../expenses-form";

import styles from "./form-inputs.module.css";
import { lettersRegEx } from "../../../../../utils/constants";

interface IFormInputs {
    changeFormData: (name: string, value: string) => void;
    formData: IFormData;
}

const FormInputs: FC<IFormInputs> = ({ changeFormData, formData }) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {
            target: { value, name },
        } = event;



        if (name === "price" && lettersRegEx.test(value)) {
            value.replace(lettersRegEx, "");

            return;
        }

        changeFormData(name, value);
    };

    return (
        <div className={styles.inputs}>
            <Input
                value={formData.name}
                name="name"
                type="text"
                placeholder="Название"
                onChange={handleChange}
                extraClassForBlock={styles.extraClass}
                extraClassForInput={styles.extraClass}
            />
            <Input
                value={formData.price}
                name="price"
                type="text"
                placeholder="Цена"
                onChange={handleChange}
                extraClassForBlock={styles.extraClass}
                extraClassForInput={styles.extraClass}
            />
            <Input
                value={formData.date}
                name="date"
                type="date"
                placeholder="Дата"
                onChange={handleChange}
                extraClassForBlock={styles.extraClass}
                extraClassForInput={styles.extraClass}
            />
            <Select
                options={["₸", "₽", "$", "€"]}
                value={formData.currency}
                onChange={handleChange}
                name={"currency"}
            />
        </div>
    )
};

export default FormInputs;