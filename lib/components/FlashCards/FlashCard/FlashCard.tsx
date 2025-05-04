import { ReactElement } from "react";
import styles from "./FlashCard.module.css";
import { FlashCardProps } from "../types";

export function FlashCard({
  front,
  back,
  isFlipped,
  setIsFliped,
}: FlashCardProps): ReactElement {
  function flipCard() {
    setIsFliped(!isFlipped);
  }

  return (
    <div
      className={`${styles.wrapper} ${isFlipped ? styles.outline : ""}`}
      onClick={flipCard}
    >
      <div className={styles.card}>
        <div className={styles.view}> {front} </div>
        <div className={`${styles.view} ${styles.back}`}> {back} </div>
      </div>
    </div>
  );
}
