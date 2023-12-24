import { FC, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch } from "../../../../store/hooks";

import { addExpense } from "../../../../store/actions/expenses";
import { openNotify } from "../../../../store/actions/notify";
import { IMonths, ECurrency } from "../../../../store/types";

import { getDateInfo, getMonthByNumber } from '../../../../utils/helpers';

import useForm from "../../../../hooks/useForm";

import FormInputs from "./form-inputs/form-inputs";
import Button from "../../../../components/button/button";

import styles from "./expenses-form.module.css";

export interface IFormData {
    name: string;
    price: string;
    date: string;
    currency: ECurrency
}

interface IExpensesForm {
    onOpenModal: VoidFunction
}

const ExpensesForm: FC<IExpensesForm> = ({ onOpenModal }) => {
    const dispatch = useAppDispatch();

    const [formData, changeFormData, resetForm] = useForm<IFormData>({
        name: "",
        price: "",
        date: "",
        currency: ECurrency.Tenge
    });


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (Object.values(formData).some(value => value === "" || value === 0)) {
            dispatch(openNotify({ message: "Некоторые поля не заполнены!", type: "warning" }));
            return;
        }

        const { month } = getDateInfo(formData.date);
        const expenseMonth = getMonthByNumber(month);

        dispatch(addExpense({ ...formData, price: +formData.price, id: uuidv4(), month: expenseMonth as IMonths }));

        resetForm();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FormInputs formData={formData} changeFormData={changeFormData} />
            <div>
                <Button type="button" onClick={onOpenModal} extraClassForButton={styles.extraClassLimit}>
                    Добавить лимит
                </Button>
                <Button type="submit" extraClassForButton={styles.extraClassButton}>
                    Подтвердить
                </Button>
            </div>
        </form>
    );
};

export default ExpensesForm;
