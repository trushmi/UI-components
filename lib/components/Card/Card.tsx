import { ReactElement } from "react";
import { CardProps } from "./types";
import styles from "./Card.module.css";

export function Card({
  cardTitle,
  cardDescription,
  frontImage,
  hoverImage,
  externalLink,
}: CardProps): ReactElement {
  return (
    <div className={styles.cardContainer}>
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read more about ${cardTitle}`}
        className={styles.cardLink}
      >
        <div className={styles.imageContainer}>
          <img
            src={frontImage}
            alt={`${cardTitle} front`}
            className={styles.mainImage}
          />
          {hoverImage && (
            <img
              src={hoverImage}
              alt={`${cardTitle} hover`}
              className={styles.hoverImage}
            />
          )}
        </div>
        <div className={styles.cardInfoContainer}>
          <div className={styles.cardTitle}>{cardTitle}</div>
          <div className={styles.cardDescription}>{cardDescription}</div>
        </div>
      </a>
    </div>
  );
}
