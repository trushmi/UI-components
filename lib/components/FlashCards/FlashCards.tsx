import { useState, ReactElement } from "react";
import { FlashCard } from "./FlashCard/FlashCard";
import { FlashCardsProps } from "./types";

import styles from "./FlashCards.module.css";

export function FlashCards({ flashCardsData }: FlashCardsProps): ReactElement {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFliped] = useState<boolean>(false);

  function nextCard() {
    setIsFliped(false);
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === flashCardsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 300);
  }

  function prevCard() {
    setIsFliped(false);
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === 0 ? flashCardsData.length - 1 : prevIndex - 1
      );
    }, 300);
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <FlashCard
          front={flashCardsData[index].front}
          back={flashCardsData[index].back}
          isFlipped={isFlipped}
          setIsFliped={setIsFliped}
        />
      </div>
      <div className={styles.toggleCards}>
        <button
          onClick={prevCard}
          className={styles.btnToggleCard}
          aria-label="Previous card"
        >
          Previous
        </button>
        <div>
          {index + 1}/{flashCardsData.length}
        </div>
        <button
          onClick={nextCard}
          className={styles.btnToggleCard}
          aria-label="Next card"
        >
          Next
        </button>
      </div>
    </div>
  );
}
