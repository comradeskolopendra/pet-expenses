import { FC } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateVisibleSidebar } from "../../store/actions/expenses";


import ExpensesForm from "./components/expenses-form/expenses-form";
import ExpensesView from "./components/expenses-view/expenses-view";
import ExpensesChart from "./components/expenses-chart/expenses-chart";
import Sidebar from "../../components/sidebar/sidebar";

import { getStateVisibleSidebar } from "./selectors";

const Main: FC = () => {
    const dispatch = useAppDispatch();
    const visibleSidebar = useAppSelector(getStateVisibleSidebar);

    const handleClose = () => {
        dispatch(updateVisibleSidebar(false))
    };

    return (
        <section>
            <ExpensesForm />
            <ExpensesView />
            {visibleSidebar &&
                <Sidebar onClose={handleClose}>
                    <ExpensesChart />
                </Sidebar>
            }
        </section>
    );
};

export default Main;
