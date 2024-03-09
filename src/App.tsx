import React, { useEffect, useState } from "react";
import "./App.css";
import { EquipmentCounts, EquipmentCountsKey } from "./types/types";
import { EquipmentCountButtons } from "./components/EquipmentCountButtons/EquipmentCountButtons";

const App = () => {
  const defaultEquipmentCounts: EquipmentCounts = {
    "Crash Cymbals": 0,
    "Ride Cymbals": 0,
    "Splash Cymbals": 0,
    "China Cymbals": 0,
    "Snare Drums": 0,
    "Kick Drums": 0,
  }

  const [equipmentCounts, setEquipmentCounts] = useState<EquipmentCounts>(
    () => {
      const storedEquipmentCounts = localStorage.getItem("equipmentCounts");
      return storedEquipmentCounts
        ? JSON.parse(storedEquipmentCounts)
        : defaultEquipmentCounts;
    }
  );

  useEffect(() => {
    localStorage.setItem("equipmentCounts", JSON.stringify(equipmentCounts));
  }, [equipmentCounts]);

  const totalEquipment = Object.values(equipmentCounts).reduce(
    (accumulator, initialValue) => accumulator + initialValue,
    0
  );

  const countEquipment = (
    equipmentType: EquipmentCountsKey,
    increment: number
  ) => {
    if (equipmentCounts[equipmentType] + increment >= 0) {
      setEquipmentCounts((prevCounts) => ({
        ...prevCounts,
        [equipmentType]: prevCounts[equipmentType] + increment,
      }));
    }
  }

  const deleteEquipment = (equipmentType: EquipmentCountsKey) => {
    setEquipmentCounts((prevEquipment) => {
      const { [equipmentType]: _, ...restEquipment } =
        prevEquipment;
      return restEquipment;
    });
  }

  const [newEquipment, setNewEquipment] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEquipment(event.target.value);
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newEquipment.trim() !== '') {
      setEquipmentCounts((prevCount) => ({
        ...prevCount,
        [newEquipment]: 0,
      }));
      setNewEquipment("");
    }
  }

  const resetCounts = () => {
    setEquipmentCounts(defaultEquipmentCounts);
  };

  return (
    <div className="App">
      <header>
        <h1>Drumset Equipment Counter</h1>
      </header>
      <section className="newEquipmentForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newEquipment}
            onChange={handleChange}
            placeholder="New Equipment"
          />
          <button type="submit">Add</button>
        </form>
      </section>
      <section className="equipmentCountButtonsContainer">
        {Object.keys(equipmentCounts).map((key) => {
          return (
            <EquipmentCountButtons
              countEquipment={countEquipment}
              equipmentName={key as EquipmentCountsKey}
              key={key}
            />
          );
        })}
      </section>
      <section className="equipmentCountDisplayContainer">
        {Object.entries(equipmentCounts).map(([key, value]) => {
          const emoji = key.toLowerCase().includes("drum")
            ? "🥁 "
            : key.toLowerCase().includes("cymbal")
            ? "🛎 "
            : key.toLowerCase().includes("guitar")
            ? "🎸 "
            : "";
          return (
            <div className="equipmentCountRow" key={key}>
              {emoji + key}: {equipmentCounts[key as EquipmentCountsKey] + " "}
              <button
                className="delete"
                onClick={() => {
                  deleteEquipment(key);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <div className="totalEquipmentCountRow">
          Total Equipment: {totalEquipment}
        </div>
        <button onClick={resetCounts} className="resetButton">
          Reset Everything
        </button>
      </section>
    </div>
  );
}

export default App;
