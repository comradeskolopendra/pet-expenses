import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.css";
import Overlay from "../overlay/overlay";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getStateIsVisible } from "./selectors";
import { changeModalVisible } from "../../store/actions/modal";

interface IModal {
    children: ReactNode;
}



const Modal: FC<IModal> = ({ children }) => {
    const isVisible = useAppSelector(getStateIsVisible)
    const dispatch = useAppDispatch()

    const handleOnClose = () => {
        dispatch(changeModalVisible(false))
    }

    return createPortal(
        (<section className={`${styles.modalWrapper} ${isVisible ? styles.opened : styles.closed}`}>
            <Overlay onClose={handleOnClose} />
            <div className={styles.modal}>
                <div className={styles.contents}>
                    <button onClick={handleOnClose} className={styles.close}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
                        </svg>
                    </button>
                    {children}
                </div>
            </div>
        </section>), document.getElementById("modal") as HTMLElement
    )
}

export default Modal;