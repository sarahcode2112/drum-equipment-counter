import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type Cymbal = 'rideCymbal' | 'crashCymbal' | 'totalCymbal'
type CymbalDisplayName = 'Crash Cymbal' | 'Ride Cymbal'
type CymbalCounts = {
  crashCymbal: number,
  rideCymbal: number,
  totalCymbal: number
}

function EquipmentCountButton({equipmentName, countDirection, onClick}: {countDirection: 'Up' | 'Down', equipmentName: CymbalDisplayName, onClick: () => void}){
  return (
    <button onClick={onClick}>
      {countDirection} {equipmentName}
    </button>
  )
}

function App() {
  const [cymbalCounts, setCymbalCounts] = useState<CymbalCounts>({
      crashCymbal: 0,
      rideCymbal: 0,
      totalCymbal: 0
  })

  function countCymbals(cymbalType: Cymbal, increment: number) {
    if (cymbalCounts[cymbalType] + increment >= 0) {
      setCymbalCounts(prevCounts => (
        {
        ...prevCounts,
        [cymbalType]: prevCounts[cymbalType] + increment,
        totalCymbal: prevCounts.totalCymbal + increment
      }))
    }
  }

  return (
    <div className="App">
      <h1>Cymbal Counter</h1>
      <section>
        <div>
          <EquipmentCountButton countDirection={'Up'} equipmentName={'Crash Cymbal'} onClick={()=>{countCymbals('crashCymbal', 1)}}></EquipmentCountButton>
          <EquipmentCountButton countDirection={'Down'} equipmentName={'Crash Cymbal'} onClick={()=>{countCymbals('crashCymbal', -1)}}></EquipmentCountButton>
        </div>
        <div>
          <EquipmentCountButton countDirection={'Up'} equipmentName={'Ride Cymbal'} onClick={() => {countCymbals('rideCymbal', 1)}}></EquipmentCountButton>
          <EquipmentCountButton countDirection={'Down'} equipmentName={'Ride Cymbal'} onClick={() => {countCymbals('rideCymbal', -1)}}></EquipmentCountButton>
        </div>
      </section>
      <section>
        <div>
          Crash Cymbals: {cymbalCounts.crashCymbal}
        </div>
        <div>
          Ride Cymbals: {cymbalCounts.rideCymbal}
        </div>
        <div>
          Total Cymbals: {cymbalCounts.totalCymbal}
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
