import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearNotify } from "../../store/actions/notify";
import { getNotifyMessageState, getNotifyTypeState } from "./selectors/selectors";

import styles from "./notify.module.css";

const Notify: FC = () => {
    const dispatch = useAppDispatch();
    const type = useAppSelector(getNotifyTypeState);
    const message = useAppSelector(getNotifyMessageState);

    useEffect(() => {
        setTimeout(() => {
            dispatch(clearNotify());
        }, 3000)
    }, [])

    const typeClassNames = type === "error" ? styles.error : styles.warning;

    return (
        <div className={styles.notifyWrapper}>
            <h4 className={[styles.type, typeClassNames].join(" ")}>{type === "warning" ? "Внимание!" : "Ошибка!"}</h4>
            <p className={styles.message}>{message}</p>
        </div>
    )
};

export default Notify;