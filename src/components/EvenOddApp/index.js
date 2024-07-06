import React, {useState} from 'react'
import './index.css'

const EvenOddApp = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    const randomValue = Math.floor(Math.random() * 101)
    setCount(prevCount => prevCount + randomValue)
  }

  const isEven = count % 2 === 0

  return (
    <div className="even-odd-app-container">
      <h1>Count {count}</h1>
      <p>{isEven ? 'Count is Even' : 'Count is Odd'}</p>
      <button onClick={incrementCount}>Increment</button>
      <p className="instruction-text">
        *Increase By Random Number Between 0 to 100
      </p>
    </div>
  )
}

export default EvenOddApp
