import { FC, useState } from "react";

import ExpensesForm from "./components/expenses-form/expenses-form";
import ExpensesView from "./components/expenses-view/expenses-view";
import ExpensesChart from "./components/expenses-chart/expenses-chart";
import Sidebar from "../../components/sidebar/sidebar";
import Modal from "../../components/modal/modal";

const Main: FC = () => {
    const [isLimitOpen, setLimitOpen] = useState<boolean>(false);

    const handlerOnCloseLimit = () => {
        setLimitOpen(false);
    }

    const handlerOnOpenLimit = () => {
        setLimitOpen(true);
    }

    return (
        <section>
            <ExpensesForm onOpenModal={handlerOnOpenLimit} /> {/* TODO: переписать на редакс! */}
            <ExpensesView />
            <Sidebar>
                <ExpensesChart />
            </Sidebar>
            {
                isLimitOpen && <Modal children={<h1>modal opened!!!</h1>} onClose={handlerOnCloseLimit} />
            }
        </section>
    );
};

export default Main;
