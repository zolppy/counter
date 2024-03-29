import { BsPlus } from "react-icons/bs";
import "../styles/components/_IncrementButton.scss";

export default function IncrementButton({ counter, onSetCounter, onReset }) {
  function handleIncrement() {
    if (counter < 99) {
      onSetCounter(prevCounter => prevCounter + 1);
    } else {
      onReset();
    }
  }

  return (
    <button id="IncrementButton" onClick={handleIncrement}>
      <BsPlus />
    </button>
  );
}