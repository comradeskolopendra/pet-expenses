import { FC } from "react";
import styles from "./expense-month.module.css";

interface IExpenseMonth {
    month: string;
    value: number;
}

const ExpenseMonth: FC<IExpenseMonth> = ({ month, value }) => {

    return (
        <p className={styles.value}>
            {value}
            <span>
                {month}
            </span>
        </p>
    )
};

export default ExpenseMonth;