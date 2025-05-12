import { useEffect, ReactElement } from "react";
import { BannerProps } from "./types";
import styles from "./Banner.module.css";

export function Banner({
  theme,
  size,
  position,
  children,
  onClose,
  isVisible,
}: BannerProps): ReactElement {
  useEffect(() => {
    if (!isVisible) {
      onClose();
    }
  }, [isVisible, onClose]);

  if (!isVisible) return <></>;

  return (
    <div
      className={`${styles.banner} ${styles[theme]} ${styles[size]} ${styles[position]}`}
    >
      <div>{children}</div>
      <button
        onClick={onClose}
        className={styles.closeBtn}
        aria-label="Close banner"
      >
        Close
      </button>
    </div>
  );
}
Banner.displayName = "Banner";
