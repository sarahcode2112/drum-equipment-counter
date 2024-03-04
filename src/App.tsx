import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CymbalEnum, CymbalEnumKey, CymbalCounts } from './types';

function EquipmentCountButton({equipmentName, countDirection, onClick}: {countDirection: 'Up' | 'Down', equipmentName: CymbalEnum, onClick: () => void}){
  return (
    <button onClick={onClick}>
      {(countDirection === 'Up') ? `⬆️ ${equipmentName}` : ` ${equipmentName} ⬇️`} 
    </button>
  )
}

function EquipmentCountButtons({ countCymbals, equipmentName }: {countCymbals: any, equipmentName: CymbalEnumKey}) {
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
      splashCymbal: 0,
      chinaCymbal: 0,
      totalCymbal: 0
  })

  function countCymbals(cymbalType: CymbalEnumKey, increment: number) {
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
      <header>
        <h1>Cymbal Counter</h1>
      </header>
      <section>
        {Object.keys(CymbalEnum).map((key) => {
          if ( key !== 'totalCymbal') {
            return(
              <EquipmentCountButtons countCymbals={countCymbals} equipmentName={key as CymbalEnumKey}/>
            )
          }
        })}
      </section>
      <section>
        {Object.entries(CymbalEnum).map(([key, value]) => {
          return (
            <div>
              {value}s: {cymbalCounts[key as CymbalEnumKey]}
            </div>
          )
        })}
      </section>
    </div>
  );
}

export default App;
    
  