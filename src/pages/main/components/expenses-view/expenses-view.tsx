import { FC } from "react";
import ExpenseCard from "./expenses-card/expense-card";
import { getExpenses } from "./selectors/selectors";
import { useAppSelector } from "../../../../store/hooks";

import styles from "./expenses-view.module.css";

const ExpensesView: FC = () => {
    const expenses = useAppSelector(getExpenses);

    return (
        <section className={styles.wrapper}>
            <h3>{new Date().getMonth() + 1}</h3>
            {expenses.map((expense) => (
                <ExpenseCard
                    price={expense.price}
                    name={expense.name}
                    date={expense.date}
                />
            ))}
        </section>
    );
};

export default ExpensesView;
