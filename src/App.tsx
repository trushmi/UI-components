import { useState } from "react";

import "./App.css";
import { Loader } from "../";

export type LoaderType = "circle" | "square" | "bar";

export interface LoaderProps {
  type: LoaderType;
  text?: string;
}
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loaderType, setLoaderType] = useState<LoaderType>("circle");

  const toggleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  const handleLoaderTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoaderType(e.target.value as LoaderType);
  };

  const buttonText = isLoading ? "Stop" : "Start";
  const textToDispay = "Loading...";

  return (
    <div className="main-container">
      <label htmlFor="loaderTypeSelect" className="sreen-read-only">
        Select Loader Type
      </label>
      <select
        id="loaderTypeSelect"
        onChange={handleLoaderTypeChange}
        value={loaderType}
      >
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="bar">Bar</option>
      </select>
      <button onClick={toggleLoading} aria-pressed={isLoading}>
        {buttonText} Loader
      </button>
      <div className="component-wrapper">
        {isLoading && <Loader type={loaderType} text={textToDispay} />}
      </div>
    </div>
  );
}

export default App;
