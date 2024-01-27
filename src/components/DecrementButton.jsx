import { BsDash } from "react-icons/bs";
import "../styles/components/_DecrementButton.scss";

export default function DecrementButton({ counter, onSetCounter, onReset }) {
  function handleDecrement() {
    if (counter > -99) {
      onSetCounter(prevCounter => prevCounter - 1);
    } else {
      onReset();
    }
  }

  return (
    <button id="DecrementButton" onClick={handleDecrement}>
      <BsDash />
    </button>
  );
}