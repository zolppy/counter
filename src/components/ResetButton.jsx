import { BsArrowClockwise } from 'react-icons/bs'
import '../styles/components/_ResetButton.scss'

function ResetButton({ onReset }) {
  return (
    <button id="ResetButton" onClick={onReset}>
      <BsArrowClockwise />
    </button>
  )
}

export default ResetButton