import Main from "../pages/main/main";
import { useAppSelector } from "../store/hooks";
import Header from "./header/header";
import Notify from "./notify/notify";

import styles from "./app.module.css";

function App() {
    const open = useAppSelector(store => store.notify.open);

    return (
        <div className={styles.app}>
            <Header />

            <main className="content">
                <Main />
            </main>
            <footer>

            </footer>

            {open && <Notify />}
        </div>
    );
}

export default App;
