import { FC, useCallback } from "react";

import { useAppSelector } from "../../../../store/hooks";
import ExpenseMonth from "./expense-month/expense-month";

import type { IMonths } from "../../../../store/types";

import { getStateExpenses } from "./selectors";

import styles from "./expenses-chart.module.css";

const ExpensesChart: FC = () => {
    const expenses = useAppSelector(getStateExpenses);

    const months: IMonths[] = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ]

    const getAmountByMonth = (month: IMonths) => {
        return expenses.filter((expense) => expense.month === month).reduce((base, expense) => base + +expense.price, 0);
    }

    return (
        <div className={styles.wrapper}>
            {months.map((month) => {
                return <ExpenseMonth month={month} className={"month"} key={month} value={getAmountByMonth(month)} />
            })}
        </div>
    );
};

export default ExpensesChart;