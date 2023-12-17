import Main from "../pages/main/main";
import Header from "../components/header/header";
import Notify from "../components/notify/notify";

import styles from "./app.module.css";

function App() {
    return (
        <div className={styles.app}>
            <Header />

            <main className="content">
                <Main />
            </main>
            <footer>

            </footer>

            <Notify />
        </div>
    );
}

export default App;
