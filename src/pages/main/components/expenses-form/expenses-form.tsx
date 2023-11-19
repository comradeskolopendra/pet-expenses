import { FC, ChangeEvent, FormEvent } from "react";
import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";

import useForm from "../../../../hooks/useForm";

import styles from "./expenses-form.module.css";

const ExpensesForm: FC = () => {
    const [formData, changeFormData] = useForm<{ name: string, price: number; date: string }>({
        name: "",
        price: 0,
        date: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value, name },
        } = event;
        changeFormData(name, value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("submited")
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input
                value={formData.name}
                name="name"
                type="text"
                placeholder="Название"
                onChange={handleChange}
            />
            <Input
                value={formData.price}
                name="price"
                type="number"
                placeholder="Цена"
                onChange={handleChange}
            />
            <Input
                value={formData.date}
                name="date"
                type="date"
                placeholder="Дата"
                onChange={handleChange}
            />
            <Button
                type="submit"
                title="Подтвердить"
                extraClassForButton={styles.extraButton}
            />
        </form>
    )
};

export default ExpensesForm;