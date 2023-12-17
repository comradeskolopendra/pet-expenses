import { FC, MouseEventHandler } from "react";
import { useAppDispatch } from "../../../../../store/hooks";
import { formatDate } from "../../../../../utils/helpers";
import Button from "../../../../../components/button/button";
import styles from "./expense-card.module.css";
import { removeExpense } from "../../../../../store/actions/expenses";

interface IExpenseCard {
    name: string;
    price: number;
    date: string;
    id: string;
}

const ExpenseCard: FC<IExpenseCard> = ({ name, price, date, id }) => {
    const dispatch = useAppDispatch();

    const handleRemove = () => {
        dispatch(removeExpense(id));
    };

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
            <div className={styles.cardLeftside}>
                <p className={styles.text}>
                    Цена: <span>{price}</span>
                </p>
                <Button type="button" onClick={handleRemove}>
                    Удалить
                </Button>
            </div>
        </div>
    );
};

export default ExpenseCard;
