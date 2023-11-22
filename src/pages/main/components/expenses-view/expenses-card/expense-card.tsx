import { FC } from "react";
import { formatDate } from "../../../../../utils/helpers";
import styles from "./expense-card.module.css";

interface IExpenseCard {
    name: string;
    price: number;
    date: string;
}

const ExpenseCard: FC<IExpenseCard> = ({ name, price, date }) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardLeftside}>
                <p className={styles.text}>
                    Название: <span>{name}</span>
                </p>
                <p className={styles.text}>
                    Дата: <span>{formatDate(date)}</span>
                </p>
            </div>
            <p className={styles.text}>
                Цена: <span>{price}</span>
            </p>
        </div>
    );
};

export default ExpenseCard;
