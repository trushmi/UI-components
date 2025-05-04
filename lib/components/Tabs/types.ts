import { ReactNode } from "react";

export interface TabConfig {
  [key: string]: {
    label: string;
    content: ReactNode;
  };
}

export interface TabsProps {
  tabConfig: TabConfig;
}
