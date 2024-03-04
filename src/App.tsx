import React, { useState } from 'react';
import './App.css';
import { CymbalEnum, CymbalEnumKey, CymbalCounts } from './types/types';
import { EquipmentCountButtons } from './components/EquipmentCountButtons/EquipmentCountButtons';

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
      <section className="equipmentCountButtonsContainer">
        {Object.keys(CymbalEnum).map((key) => {
          if ( key !== 'totalCymbal') {
            return(
              <EquipmentCountButtons countCymbals={countCymbals} equipmentName={key as CymbalEnumKey}/>
            )
          }
        })}
      </section>
      <section className="equipmentCountContainer">
        {Object.entries(CymbalEnum).map(([key, value]) => {
          if (key !== 'totalCymbal') {
            return (
              <div className="equipmentCountRow">
                {value}s: {cymbalCounts[key as CymbalEnumKey]}
              </div>
            )
          }
        })}
        <div className="totalCymbalCountRow">
          {CymbalEnum.totalCymbal}s: {cymbalCounts['totalCymbal']}
        </div>
      </section>
    </div>
  );
}

export default App;
    
  