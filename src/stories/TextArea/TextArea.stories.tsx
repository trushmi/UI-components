import { textAreaDemoData } from "./textAreaDemoData";
import { useState } from "react";

export default function App() {
  const [textAreas, setTextAreas] = useState(textAreaDemoData);

  const handleChange =
    (id: string) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextAreas((prevTextAreas) =>
        prevTextAreas.map((textArea) =>
          textArea.id === id
            ? { ...textArea, value: event.target.value }
            : textArea
        )
      );
    };

  return (
    <div className="componentWrapper">
      {textAreas.map((textAreaExample) => (
        <TextArea
          key={textAreaExample.id}
          {...textAreaExample}
          onChange={handleChange(textAreaExample.id)}
        />
      ))}
    </div>
  );
}
