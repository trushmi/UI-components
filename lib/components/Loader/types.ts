export type LoaderType = "circle" | "square" | "bar";

export interface LoaderProps {
  type: LoaderType;
  text?: string;
}
