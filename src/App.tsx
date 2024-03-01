import React, { ComponentProps } from 'react';
import logo from './logo.svg';
import './App.css';

function MyButton(props: ComponentProps<'button'>){
  return (
    <button {...props}>This is my button</button>
  )
}

function runFunction() { 
  console.log('function was run')
}

function App() {
  return (
    <div className="App">
      <MyButton disabled={false} onClick={()=>{runFunction()}}/>
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
