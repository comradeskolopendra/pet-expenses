import { FC, useMemo, useState } from "react";
import { useAppSelector } from "../../../../../store/hooks";

import Button from "../../../../../components/button/button";
import styles from "./expense-month.module.css";
import { getStateExpenses } from "../selectors";
import { ECurrency, IMonths } from "../../../../../store/types";

import { v4 as uuid } from "uuid";

interface IExpenseMonth {
    month: IMonths;
    className: string;
}

const ExpenseMonth: FC<IExpenseMonth> = ({ month, className }) => {
    const [currencysOpen, setCurrencysOpen] = useState<boolean>(false);
    const expenses = useAppSelector(getStateExpenses);

    const getAmountByCurrency = (currency: ECurrency, month: IMonths) => expenses.filter((expense) => expense.currency === currency && expense.month === month).reduce((acc, expense) => acc + expense.price, 0)

    const currencysInfo = useMemo(() => (
        {
            [ECurrency.Tenge]: getAmountByCurrency(ECurrency.Tenge, month) || 0,
            [ECurrency.Dollar]: getAmountByCurrency(ECurrency.Dollar, month) || 0,
            [ECurrency.Ruble]: getAmountByCurrency(ECurrency.Ruble, month) || 0,
            [ECurrency.Euro]: getAmountByCurrency(ECurrency.Euro, month) || 0,
        }
    ), [expenses])

    const handleCurrencysOpen = () => {
        setCurrencysOpen(prevState => !prevState);
    }

    return (
        <aside className={`${styles.value} ${className}`}>
            <div className={styles.info}>
                <Button type="button" extraClassForButton={styles.extraButton} onClick={handleCurrencysOpen}>
                    Валюты
                </Button>
                <div className={`${styles.currencys} ${currencysOpen ? styles.open : styles.close}`}>
                    {Object.entries(currencysInfo).map(([currency, price]) => {
                        return (
                            <p className={styles.infoPrice} key={uuid()}>
                                <span>{price}</span> {currency}
                            </p>
                        )
                    })}
                </div>
            </div>
            <span>
                {month}
            </span>
        </aside>
    )
};

export default ExpenseMonth;