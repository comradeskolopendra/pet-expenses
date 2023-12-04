import { FC } from "react";
import ExpenseCard from "./expenses-card/expense-card";
import { getExpenses } from "./selectors/selectors";
import { useAppSelector } from "../../../../store/hooks";

import styles from "./expenses-view.module.css";

const ExpensesView: FC = () => {
    const expenses = useAppSelector(getExpenses);

    return (
        <section className={styles.wrapper}>
            {expenses.map((expense) => (
                <ExpenseCard
                    key={expense.id}
                    price={expense.price}
                    name={expense.name}
                    date={expense.date}
                    id={expense.id}
                />
            ))}
        </section>
    );
};

export default ExpensesView;
