import { ReactElement } from "react";
import styles from "./Loader.module.css";
import { LoaderProps } from "./types";

export function Loader({ type, text }: LoaderProps): ReactElement {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles[`loader-${type}`]}></div>
      {text && <div className={styles.loadingText}>{text}</div>}
    </div>
  );
}
