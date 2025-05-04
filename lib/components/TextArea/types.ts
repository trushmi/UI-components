export interface TextAreaProps {
  id: string;
  label: string;
  isRequired: boolean;
  placeholderText: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  rows?: number;
  cols?: number;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  autoFocus?: boolean;
  name?: string;
  form?: string;
  spellCheck?: boolean;
  wrap?: "soft" | "hard";
  resize?: "none" | "both" | "horizontal" | "vertical";
}
