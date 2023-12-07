import { FC } from "react";
import styles from "./expense-month.module.css";

interface IExpenseMonth {
    month: string;
    value: number;
    className: string;
}

const ExpenseMonth: FC<IExpenseMonth> = ({ month, value, className }) => {

    return (
        <p className={`${styles.value} ${className}`}>
            {value}
            <span>
                {month}
            </span>
        </p>
    )
};

export default ExpenseMonth;