import React, { useEffect, useState } from 'react';
import './App.css';
import { CymbalCounts, CymbalCountsKey } from './types/types';
import { EquipmentCountButtons } from './components/EquipmentCountButtons/EquipmentCountButtons';

function App() {
  const [cymbalCounts, setCymbalCounts] = useState<CymbalCounts>(() => {
    const storedCymbalCounts = localStorage.getItem('cymbalCounts')
    return storedCymbalCounts ? JSON.parse(storedCymbalCounts) : {
      'Crash Cymbals': 0,
      'Ride Cymbals': 0,
      'Splash Cymbals': 0,
      'China Cymbals': 0,
      'Snare Drums': 0,
      'Kick Drums': 0,
    }
  })

  useEffect(() => {
    localStorage.setItem('cymbalCounts', JSON.stringify(cymbalCounts))
  }, [cymbalCounts])

  const totalEquipment = Object.values(cymbalCounts).reduce((accumulator, initialValue) => accumulator + initialValue, 0)

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

  function deleteCymbals(cymbalType: CymbalCountsKey) {
    setCymbalCounts(prevCymbals => {
      const { [cymbalType]: deletedCymbal, ...restCymbals } = prevCymbals;
      return restCymbals
    })
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
        <h1>Drumset Equipment Counter</h1>
      </header>
      <section className="newCymbalForm">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} placeholder="New Equipment"></input>
          <button type="submit">
            Add
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
      <section className="equipmentCountDisplayContainer">
        {Object.entries(cymbalCounts).map(([key, value]) => {
          const emoji = key.toLowerCase().includes("drum")
            ? "🥁 "
            : key.toLowerCase().includes("cymbal")
            ? "🛎 "
            : key.toLowerCase().includes("guitar")
            ? "🎸 "
            : "";
          return (
            <div className="equipmentCountRow" key={key}>
              {emoji + key}: {cymbalCounts[key as CymbalCountsKey] + ' '} 
              
              <button className="delete" onClick={() => {deleteCymbals(key)}}>Delete</button>
            </div>
          )
        })}
        <div className="totalCymbalCountRow">
          Total Equipment: {totalEquipment}
        </div>
      </section>
    </div>
  );
}

export default App;