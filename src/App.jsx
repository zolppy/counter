import { useState } from "react";
import Output from "./components/Output";
import DecrementButton from "./components/DecrementButton";
import ResetButton from "./components/ResetButton";
import IncrementButton from "./components/IncrementButton";
import "./styles/components/_App.scss";

export default function App() {
  const [counter, setCounter] = useState(0);
  const handleReset = () => counter && setCounter(0);

  return (
    <div id="App">
      <div id="App__container">
        <Output counter={counter} />
        <div id="App__buttons">
          <DecrementButton
            counter={counter}
            onSetCounter={setCounter}
            onReset={handleReset}
          />
          <ResetButton
            onReset={handleReset}
          />
          <IncrementButton
            counter={counter}
            onSetCounter={setCounter}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}