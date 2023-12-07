import { FC } from "react";

import Button from "../button/button";

import styles from "./header.module.css";
import { useAppDispatch } from "../../store/hooks";
import { updateVisibleSidebar } from "../../store/actions/expenses";


const Header: FC = () => {
    const dispatch = useAppDispatch();

    const handleOpen = () => {
        dispatch(updateVisibleSidebar(true));
    }

    return (
        <header className={styles.wrapper}>
            <section className={styles.items}>
                <div className={styles.headerItem}>
                    <h1 className={styles.logo}>Expenses</h1>
                </div>
                <div className={styles.headerItem}>
                    <Button title="Отчёт" onClick={handleOpen} type="button" extraClassForButton={styles.button} />
                </div>
            </section>
        </header>
    )
};

export default Header;