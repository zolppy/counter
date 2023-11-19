import { useState } from 'react'
import Output from './components/Output'
import DecrementButton from './components/DecrementButton'
import ResetButton from './components/ResetButton'
import IncrementButton from './components/IncrementButton'
import './styles/components/_App.scss'

function App() {
  const [counter, setCounter] = useState(0)

  function handleReset() {
    if (counter != 0) {
      setCounter(prevState => prevState = 0)
    }
  }

  return (
    <div id="App">
      <main>
        <div id="App__container">
          <Output counter={counter} />
          <div id='App__buttons'>
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
      </main>
    </div>
  )
}

export default App