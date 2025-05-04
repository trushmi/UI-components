import { TextAreaProps } from "../types";

export const textAreaDemoData: TextAreaProps[] = [
  {
    id: "1",
    label: "What are your superpowers?",
    isRequired: true,
    textAreaWidth: "450px",
    textAreaHeight: "150px",
    placeholderText: "Type here...",
    maxLength: 200,
    value: "",
    onChange: () => {},
    autoFocus: true,
  },
  {
    id: "2",
    label: "Why do you like software engineering?",
    isRequired: false,
    textAreaWidth: "450px",
    textAreaHeight: "100px",
    placeholderText: "Type here...",
    minLength: 10,
    rows: 4,
    cols: 50,
    value: "",
    onChange: () => {},
    spellCheck: true,
    wrap: "soft",
    resize: "vertical",
  },
];
