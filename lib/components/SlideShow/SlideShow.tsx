import { ReactElement, useState, useEffect } from "react";
import { SlideShowProps } from "./types";

import styles from "./slideShow.module.css";

export function SlideShow({
  images,
  isNavButtons,
  intervalInMilliseconds,
}: SlideShowProps): ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const interval = intervalInMilliseconds;

  useEffect(() => {
    const timeoutId = setTimeout(() => goRight(), interval);
    return () => clearTimeout(timeoutId);
  }, [activeIndex]);

  const goLeft = () => {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goRight = () => {
    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className={styles.slideshowContainer} aria-live="polite">
      <div
        className={
          isLoading
            ? `${styles.imageContainer} ${styles.loading}`
            : styles.imageContainer
        }
      >
        {isLoading && <div className={styles.loader}> Loading ...</div>}
        <img
          src={images[activeIndex].img}
          alt={images[activeIndex].alt}
          className={styles.image}
          onLoad={() => setIsLoading(false)}
          aria-labelledby={`image-${images[activeIndex].id}`}
        />
        {isNavButtons && (
          <div className={styles.buttonsContainer}>
            <button
              onClick={goLeft}
              className={styles.navigationButton}
              aria-label="Previous image"
            >
              {"<"}
            </button>
            <button
              onClick={goRight}
              className={styles.navigationButton}
              aria-label="Next image"
            >
              {">"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
