import { FC } from "react";

import ExpensesForm from "./components/expenses-form/expenses-form";
import ExpensesView from "./components/expenses-view/expenses-view";
import ExpensesChart from "./components/expenses-chart/expenses-chart";
import Sidebar from "../../components/sidebar/sidebar";

const Main: FC = () => {

    return (
        <section>
            <ExpensesForm />
            <ExpensesView />
            <Sidebar>
                <ExpensesChart />
            </Sidebar>
        </section>
    );
};

export default Main;
