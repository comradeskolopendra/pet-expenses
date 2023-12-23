import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import { getStateVisibleSidebar } from "./selectors";
import { updateVisibleSidebar } from "../../store/actions/expenses";

import styles from "./sidebar.module.css";
import Button from "../button/button";

interface ISidebar {
    children: ReactNode;
}

const Sidebar: FC<ISidebar> = ({ children }) => {
    const dispatch = useAppDispatch();
    const visibleSidebar = useAppSelector(getStateVisibleSidebar);

    const handleOnToggle = () => {
        dispatch(updateVisibleSidebar(!visibleSidebar))
    };

    return createPortal(
        (
            <div>
                <div className={`${styles.sidebar} ${visibleSidebar ? styles.sidebarOpen : styles.sidebarClose}`}>
                    <div className={styles.content}>
                        {children}
                    </div>
                    <Button extraClassForButton={styles.close} onClick={handleOnToggle} type={"button"}>
                        {visibleSidebar ? "Закрыть" : "Открыть"}
                    </Button>
                </div>
            </div>
        ), document.getElementById("sidebar")!
    );
};

export default Sidebar;