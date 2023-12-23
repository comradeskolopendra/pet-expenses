import { FC } from "react";

import ExpenseMonth from "./expense-month/expense-month";

import { months } from "../../../../utils/constants";
import styles from "./expenses-chart.module.css";


const ExpensesChart: FC = () => {
    return (
        <div className={styles.wrapper}>
            {months.map((month) => {
                return <ExpenseMonth month={month} className={"month"} key={month} />
            })}
        </div>
    );
};

export default ExpensesChart;