import styles from "./TextArea.module.css";
import { TextAreaProps } from "./types";

export function TextArea({
  label,
  isRequired,
  placeholderText,
  maxLength,
  minLength,
  disabled,
  readOnly,
  rows,
  cols,
  value,
  onChange,
  autoFocus,
  name,
  form,
  spellCheck,
  wrap,
  resize,
}: TextAreaProps) {
  return (
    <div className={styles.textAreaContainer}>
      <label
        htmlFor={`text-area-${label}`}
        className={`${styles.textAreaLabel} ${
          isRequired ? styles.required : ""
        }`}
      >
        {label}
      </label>
      <textarea
        id={`text-area-${label}`}
        className={styles.textArea}
        placeholder={placeholderText}
        aria-required={isRequired}
        required={isRequired}
        maxLength={maxLength}
        minLength={minLength}
        disabled={disabled}
        readOnly={readOnly}
        rows={rows}
        cols={cols}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        name={name}
        form={form}
        spellCheck={spellCheck}
        wrap={wrap}
        style={{ resize }}
      ></textarea>
    </div>
  );
}
