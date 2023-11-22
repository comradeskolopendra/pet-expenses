import { FC } from "react";

import ExpensesForm from "./components/expenses-form/expenses-form";
import ExpensesView from "./components/expenses-view/expenses-view";

const Main: FC = () => {
    return (
        <section>
            <ExpensesForm />
            <ExpensesView />
        </section>
    );
};

export default Main;
