import { FC } from "react";
import styles from "./header.module.css";


const Header: FC = () => {
    return (
        <header className={styles.wrapper}>
            <section className={styles.items}>
                <h1 className={styles.logo}>Expenses</h1>
            </section>
        </header>
    )
};

export default Header;