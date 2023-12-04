import { FC, useMemo } from "react";

import { useAppSelector } from "../../../../store/hooks";
import ExpenseMonth from "./expense-month/expense-month";

import { getStateExpenses } from "./selectors/selectors";

import styles from "./expenses-chart.module.css";

const ExpensesChart: FC = () => {
    const expenses = useAppSelector(getStateExpenses);
    const months = {
        jan: expenses.filter((expense) => expense.month === "Январь"),
        feb: expenses.filter((expense) => expense.month === "Февраль"),
        marc: expenses.filter((expense) => expense.month === "Март"),
        apr: expenses.filter((expense) => expense.month === "Апрель"),
        may: expenses.filter((expense) => expense.month === "Май"),
        jun: expenses.filter((expense) => expense.month === "Июнь"),
        jul: expenses.filter((expense) => expense.month === "Июль"),
        aug: expenses.filter((expense) => expense.month === "Август"),
        sept: expenses.filter((expense) => expense.month === "Сентябрь"),
        oct: expenses.filter((expense) => expense.month === "Октябрь"),
        nov: expenses.filter((expense) => expense.month === "Ноябрь"),
        dec: expenses.filter((expense) => expense.month === "Декабрь"),
    }

    return (
        <>
            <ExpenseMonth value={42} month="Декабрь" />
        </>
    );
};

export default ExpensesChart;