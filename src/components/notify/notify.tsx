import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearNotify } from "../../store/actions/notify";
import { getNotifyMessageState, getNotifyTypeState, getNotifyOpenState } from "./selectors";

import styles from "./notify.module.css";

const Notify: FC = () => {
    const dispatch = useAppDispatch();
    const type = useAppSelector(getNotifyTypeState);
    const message = useAppSelector(getNotifyMessageState);
    const open = useAppSelector(getNotifyOpenState);

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                dispatch(clearNotify());
            }, 3000)
        }
    }, [open])

    const typeClassNames = type === "error" ? styles.error : styles.warning;

    return (
        <div className={`${styles.notifyWrapper} ${open ? styles.open : styles.close}`}>
            <h4 className={[styles.type, typeClassNames].join(" ")}>{type === "warning" ? "Внимание!" : "Ошибка!"}</h4>
            <p className={styles.message}>{message}</p>
        </div>
    )
};

export default Notify;