import React,{ useState } from 'react'

const App = () => {
  const [count, setCount] = useState(10);
  console.log(count);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }
  
  return (
    <div>
      <div id="counter-box">
        <h2>
          Counter: <span>{count}</span>
        </h2>

        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
    
  )
}

export default App