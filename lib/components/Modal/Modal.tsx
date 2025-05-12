import { ReactElement } from "react";
import { ModalProps } from "./types";

import styles from "./Modal.module.css";

export function Modal({ onCloseModal, children }: ModalProps): ReactElement {
  return (
    <div className={styles.modalWrapper} role="dialog" aria-modal="true">
      <div className={styles.modalContainer}>
        <button
          onClick={onCloseModal}
          className={styles.closeBtn}
          aria-label="Close modal"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
Modal.displayName = "Modal";
