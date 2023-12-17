import { FC, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";

import { Transition } from 'react-transition-group';

import styles from "./sidebar.module.css";
import Overlay from "../overlay/overlay";
import Button from "../button/button";

interface ISidebar {
    onClose: () => void;
    children: ReactNode;
}

const Sidebar: FC<ISidebar> = ({ onClose, children }) => {
    const nodeRef = useRef(null);


    return createPortal(
        (
            <div>
                <Overlay onClose={onClose} />
                <div className={styles.sidebar}>
                    {children}

                    <Button title={"Закрыть"} onClick={onClose} type={"button"} />
                </div>
            </div>
        ), document.getElementById("sidebar")!
    );
};

export default Sidebar;