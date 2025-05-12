import { ReactElement, useState } from "react";

import { TabsProps } from "./types";
import styles from "./Tabs.module.css";

export function Tabs({ tabConfig }: TabsProps): ReactElement {
  const [activeTab, setActiveTab] = useState(Object.keys(tabConfig)[0]);

  return (
    <>
      <div role="tablist" className={styles.tabList}>
        {Object.keys(tabConfig).map((key) => (
          <button
            key={key}
            className={`${styles.tab} ${
              activeTab === key ? styles.active : ""
            }`}
            onClick={() => setActiveTab(key)}
            aria-selected={activeTab === key}
            role="tab"
            id={key}
            aria-controls={`tabpanel-${key}`}
          >
            {tabConfig[key].label}
          </button>
        ))}
      </div>

      <div
        className={styles.tabsContent}
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={activeTab}
      >
        {tabConfig[activeTab].content}
      </div>
    </>
  );
}
Tabs.displayName = "Tabs";
