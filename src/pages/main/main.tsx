import { FC } from "react";

import ExpensesForm from "./components/expenses-form/expenses-form";
import ExpensesView from "./components/expenses-view/expenses-view";
import ExpensesChart from "./components/expenses-chart/expenses-chart";

const Main: FC = () => {
    return (
        <section>
            <ExpensesForm />
            <ExpensesView />
            <ExpensesChart />
        </section>
    );
};

export default Main;
