import { FC, ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import useForm from "../../../../hooks/useForm";

import { addExpense } from "../../../../store/actions/expenses";

import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";
import { v4 as uuidv4 } from "uuid";
import styles from "./expenses-form.module.css";
import { formatDate } from '../../../../utils/helpers';

const ExpensesForm: FC = () => {
    const dispatch = useAppDispatch();

    const [formData, changeFormData] = useForm<{
        name: string;
        price: number;
        date: string;
    }>({
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

        formatDate(formData.date);

        dispatch(addExpense({ ...formData, id: uuidv4() }));
    };

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
                extraClassForButton={styles.extraClassButton}
            />
        </form>
    );
};

export default ExpensesForm;
