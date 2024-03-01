import React, { ComponentProps } from 'react';
import logo from './logo.svg';
import './App.css';

function MyButton(props: ComponentProps<'button'> & {countDirection: 'up' | 'down'} & {equipmentName: string}){
  const { children, equipmentName, countDirection, ...rest } = props

  return (
    <button {...rest}>
      {countDirection} {equipmentName}
    </button>
  )
}

function upCrashCymbal() { 
  console.log('crashCymbalCount')
}

function downCrashCymbal() {
  console.log('crashCymbalCount down')
}

function App() {
  return (
    <div className="App">
      <MyButton countDirection={'up'} equipmentName={'Crash Cymbal'} onClick={()=>{upCrashCymbal()}}></MyButton>
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
