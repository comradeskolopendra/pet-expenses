import { FC } from "react";

import styles from "./overlay.module.css";


interface IOverlay {
    onClose: () => void;
}

const Overlay: FC<IOverlay> = ({ onClose }) => {
    return <div onClick={onClose} className={styles.overlay} />
};

export default Overlay;