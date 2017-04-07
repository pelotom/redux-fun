import React from 'react'
import './App.css'

export default ({
  counters,
  addCounter,
  removeCounter,
  increment,
  decrement,
}) => (
  <div className="App">
    <button onClick={addCounter}>
      Add counter
    </button>
    <div className="App-counters">
      {counters.map((counter, index) =>
        <div key={index}>
          <h1>
            {counter}
            <button onClick={removeCounter(index)}>X</button>
          </h1>
          <p className="App-intro">
            <button onClick={increment(index)}>
              +
            </button>
            <button onClick={decrement(index)}>
              -
            </button>
          </p>
        </div>
      )}
    </div>
  </div>
)