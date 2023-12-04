import { FC, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import useForm from "../../../../hooks/useForm";

import { addExpense } from "../../../../store/actions/expenses";

import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";
import { v4 as uuidv4 } from "uuid";
import styles from "./expenses-form.module.css";
import { getDateInfo, getMonthByNumber } from '../../../../utils/helpers';
import { openNotify } from "../../../../store/actions/notify";
import { IMonths } from "../../../../store/types";

interface IFormData {
    name: string;
    price: number;
    date: string;
}

const ExpensesForm: FC = () => {
    const dispatch = useAppDispatch();

    const [formData, changeFormData, resetForm] = useForm<IFormData>({
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

        if (Object.values(formData).some(value => value === "" || value === 0)) {
            dispatch(openNotify({ message: "Некоторые поля не заполнены!", type: "warning" }));
            return;
        }

        const { month, day, year } = getDateInfo(formData.date);
        const expenseMonth = getMonthByNumber(month);

        dispatch(addExpense({ ...formData, id: uuidv4(), month: expenseMonth as IMonths }));

        resetForm();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputs}>
                <Input
                    value={formData.name}
                    name="name"
                    type="text"
                    placeholder="Название"
                    onChange={handleChange}
                    extraClassForBlock={styles.extraClassForBlock}
                    extraClassForInput={styles.extraClassForBlock}
                />
                <Input
                    value={formData.price}
                    name="price"
                    type="number"
                    placeholder="Цена"
                    onChange={handleChange}
                    extraClassForBlock={styles.extraClassForBlock}
                    extraClassForInput={styles.extraClassForBlock}
                />
                <Input
                    value={formData.date}
                    name="date"
                    type="date"
                    placeholder="Дата"
                    onChange={handleChange}
                    extraClassForBlock={styles.extraClassForBlock}
                    extraClassForInput={styles.extraClassForBlock}
                />
            </div>
            <Button
                type="submit"
                title="Подтвердить"
                extraClassForButton={styles.extraClassButton}
            />
        </form>
    );
};

export default ExpensesForm;
