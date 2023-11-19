import { BsPlus } from 'react-icons/bs'
import '../styles/components/_IncrementButton.scss'

function IncrementButton({ counter, onSetCounter, onReset }) {
  function handleIncrement() {
    if (counter < 99) {
      onSetCounter(prevState => prevState + 1)
    } else {
      onReset()
    }
  }

  return (
    <button id="IncrementButton" onClick={handleIncrement}>
      <BsPlus />
    </button>
  )
}

export default IncrementButton