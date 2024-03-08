import React, { useState } from 'react';
import './App.css';
import { CymbalCounts, CymbalCountsKey } from './types/types';
import { EquipmentCountButtons } from './components/EquipmentCountButtons/EquipmentCountButtons';

function App() {
  const [cymbalCounts, setCymbalCounts] = useState<CymbalCounts>({
      'Crash Cymbals': 0,
      'Ride Cymbals': 0,
      'Splash Cymbals': 0,
      'China Cymbals': 0,
  })

  const totalCymbal = Object.values(cymbalCounts).reduce((accumulator, initialValue) => accumulator + initialValue)

  const [newCymbal, setNewCymbal] = useState<string>('')

  function countCymbals(cymbalType: CymbalCountsKey, increment: number) {
    if (cymbalCounts[cymbalType] + increment >= 0) {
      setCymbalCounts(prevCounts => (
        {
        ...prevCounts,
        [cymbalType]: prevCounts[cymbalType] + increment,
      }))
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewCymbal(event.target.value)
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    setCymbalCounts(prevCount => ({
      ...prevCount,
      [newCymbal]: 0
    }))
    setNewCymbal('')
  }

  return (
    <div className="App">
      <header>
        <h1>Cymbal Counter</h1>
      </header>
      <section className="newCymbalForm">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} placeholder="New Cymbal"></input>
          <button type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="equipmentCountButtonsContainer">
        {Object.keys(cymbalCounts).map((key) => {
          return(
            <EquipmentCountButtons countCymbals={countCymbals} equipmentName={key as CymbalCountsKey} key={key}/>
          )
        })}
      </section>
      <section className="equipmentCountContainer">
        {Object.entries(cymbalCounts).map(([key, value]) => {
          return (
            <div className="equipmentCountRow" key={key}>
              {key}: {cymbalCounts[key as CymbalCountsKey]}
            </div>
          )
        })}
        <div className="totalCymbalCountRow">
          Total Cymbals: {totalCymbal}
        </div>
      </section>
    </div>
  );
}

export default App;