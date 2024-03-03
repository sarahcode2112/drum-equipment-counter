import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type Cymbal = 'rideCymbal' | 'crashCymbal' | 'totalCymbal'

enum CymbalDisplayName {
  Crash = 'Crash Cymbal',
  Ride = 'Ride Cymbal',
  Total = 'Total Cymbal'
}

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
          <EquipmentCountButton countDirection={'Up'} equipmentName={CymbalDisplayName.Crash} onClick={()=>{countCymbals('crashCymbal', 1)}}></EquipmentCountButton>
          <EquipmentCountButton countDirection={'Down'} equipmentName={CymbalDisplayName.Crash} onClick={()=>{countCymbals('crashCymbal', -1)}}></EquipmentCountButton>
        </div>
        <div>
          <EquipmentCountButton countDirection={'Up'} equipmentName={CymbalDisplayName.Ride} onClick={() => {countCymbals('rideCymbal', 1)}}></EquipmentCountButton>
          <EquipmentCountButton countDirection={'Down'} equipmentName={CymbalDisplayName.Ride} onClick={() => {countCymbals('rideCymbal', -1)}}></EquipmentCountButton>
        </div>
      </section>
      <section>
        <div>
          {CymbalDisplayName.Crash}s: {cymbalCounts.crashCymbal}
        </div>
        <div>
          {CymbalDisplayName.Ride}s: {cymbalCounts.rideCymbal}
        </div>
        <div>
          {CymbalDisplayName.Total}s: {cymbalCounts.totalCymbal}
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
