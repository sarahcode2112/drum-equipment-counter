import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

enum CymbalEnum {
  'crashCymbal' = 'Crash Cymbal',
  'rideCymbal' = 'Ride Cymbal',
  'totalCymbal' = 'Total Cymbal'
}

type CymbalKey = keyof typeof CymbalEnum

type CymbalCounts = Record<keyof typeof CymbalEnum, number>

function EquipmentCountButton({equipmentName, countDirection, onClick}: {countDirection: 'Up' | 'Down', equipmentName: CymbalEnum, onClick: () => void}){
  return (
    <button onClick={onClick}>
      {countDirection} {equipmentName}
    </button>
  )
}

function EquipmentCountButtons({ countCymbals, equipmentName }: {countCymbals: any, equipmentName: CymbalKey}) {
  return (
    <div>
      <EquipmentCountButton
        countDirection={"Up"}
        equipmentName={CymbalEnum[equipmentName]}
        onClick={() => {
          countCymbals(equipmentName, 1);
        }}
      ></EquipmentCountButton>
      <EquipmentCountButton
        countDirection={"Down"}
        equipmentName={CymbalEnum[equipmentName]}
        onClick={() => {
          countCymbals(equipmentName, -1);
        }}
      ></EquipmentCountButton>
    </div>
  );
}

function App() {
  const [cymbalCounts, setCymbalCounts] = useState<CymbalCounts>({
      crashCymbal: 0,
      rideCymbal: 0,
      totalCymbal: 0
  })

  function countCymbals(cymbalType: CymbalKey, increment: number) {
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
        <EquipmentCountButtons countCymbals={countCymbals} equipmentName={'crashCymbal'}  />
        <EquipmentCountButtons countCymbals={countCymbals} equipmentName={'rideCymbal'} />
      </section>
      <section>
        <div>
          {CymbalEnum.crashCymbal}s: {cymbalCounts.crashCymbal}
        </div>
        <div>
          {CymbalEnum.rideCymbal}s: {cymbalCounts.rideCymbal}
        </div>
        <div>
          {CymbalEnum.totalCymbal}s: {cymbalCounts.totalCymbal}
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
    
  