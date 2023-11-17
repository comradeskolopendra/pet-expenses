import { ChangeEvent } from "react";
import useForm from "../hooks/useForm";

import styles from "./app.module.css";

function App() {
    const [formData, changeFormData] = useForm<{name: string, price: number; date: string}>({
        name: "",
        price: 0,
        date: "",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value, name },
        } = event;
        changeFormData(name, value);
    };

    return (
        <section>
            <form className={styles.form}>
                <input
                    name="name"
                    type="text"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    name="price"
                    type="number"
                    className={styles.input}
                    value={formData.price}
                    onChange={handleChange}
                />
                <input
                    name="date"
                    type="date"
                    className={styles.input}
                    value={formData.date}
                    onChange={handleChange}
                />
            </form>
            <div></div>
        </section>
    );
}

export default App;
