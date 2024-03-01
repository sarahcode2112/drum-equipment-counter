import React, { ComponentProps, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function MyButton({equipmentName, countDirection, onClick}: {countDirection: 'Up' | 'Down', equipmentName: string, onClick: () => void}){

  return (
    <button onClick={onClick}>
      {countDirection} {equipmentName}
    </button>
  )
}



function App() {
  const [crashCymbalCount, setCrashCymbalCount] = useState<number>(0)
  const [rideCymbalCount, setRideCymbalCount] = useState<number>(0)
  const [totalCymbals, setTotalCymbals] = useState<number>(0)

  function upTotalCymbals() {
    setTotalCymbals(prevCount => prevCount + 1)
  }

  function downTotalCymbals() {
    setTotalCymbals(prevCount => prevCount -1)
  }

  function upCrashCymbal() { 
    setCrashCymbalCount(prevCount => prevCount + 1)
    upTotalCymbals()
  }
  
  function downCrashCymbal() {
    if (crashCymbalCount > 0) {
      setCrashCymbalCount(prevCount => prevCount - 1)
      downTotalCymbals()
    }
  }

  function upRideCymbal() { 
    setRideCymbalCount(prevCount => prevCount + 1)
    upTotalCymbals()
  }

  function downRideCymbal() {
    if (rideCymbalCount > 0) {
      setRideCymbalCount(prevCount => prevCount - 1)
      downTotalCymbals()
    }
  }

  return (
    <div className="App">
      <h1>Cymbal Counter</h1>
      <section>
        <div>
          <MyButton countDirection={'Up'} equipmentName={'Crash Cymbal'} onClick={()=>{upCrashCymbal()}}></MyButton>
          <MyButton countDirection={'Down'} equipmentName={'Crash Cymbal'} onClick={()=>{downCrashCymbal()}}></MyButton>
        </div>
        <div>
          <MyButton countDirection={'Up'} equipmentName={'Ride Cymbal'} onClick={() => {upRideCymbal()}}></MyButton>
          <MyButton countDirection={'Down'} equipmentName={'Ride Cymbal'} onClick={() => {downRideCymbal()}}></MyButton>
        </div>
      </section>
      <section>
        <div>
          Crash Cymbals: {crashCymbalCount}
        </div>
        <div>
          Ride Cymbals: {rideCymbalCount}
        </div>
        <div>
          Total Cymbals: {totalCymbals}
        </div>
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
