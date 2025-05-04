import styles from "./PageNotFound.module.css";
import { PageNotFoundProps } from "./types";

export default function PageNotFound({
  message,
  homePageLink,
  homePageLinkText,
}: PageNotFoundProps) {
  return (
    <div className={styles.notFoundPageWrapper} role="alert">
      <div className={styles.notFoundContent}>
        <div className={styles.errorCode}>404</div>
        <h2>Page not found</h2>
        <p className={styles.errorMsg}>{message}</p>
        <a
          href={homePageLink}
          aria-label={homePageLinkText}
          className={styles.homePageLink}
        >
          {homePageLinkText}
        </a>
      </div>
    </div>
  );
}
