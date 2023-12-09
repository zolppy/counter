import { BsArrowClockwise } from 'react-icons/bs';
import '../styles/components/_ResetButton.scss';

export default function ResetButton({ onReset }) {
  return (
    <button id="ResetButton" onClick={onReset}>
      <BsArrowClockwise />
    </button>
  );
}