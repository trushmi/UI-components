import { ReactElement, useState } from "react";
import styles from "./Accordion.module.css";
import { AccordionProps } from "./types";

export function Accordion({
  accordionData,
  accordionTitle,
}: AccordionProps): ReactElement {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.accordionTitle}>{accordionTitle}</h1>
      {accordionData.map((item) => (
        <div key={item.id}>
          <button
            className={styles.title}
            onClick={() => toggleItem(item.id)}
            aria-expanded={openItemId === item.id}
            aria-controls={`content-${item.id}`}
            id={`title-${item.id}`}
          >
            {item.title}
          </button>
          <div
            className={`${styles.content} ${
              openItemId === item.id ? styles.visible : ""
            }`}
            id={`content-${item.id}`}
            aria-labelledby={`title-${item.id}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
Accordion.displayName = "Accordion";
