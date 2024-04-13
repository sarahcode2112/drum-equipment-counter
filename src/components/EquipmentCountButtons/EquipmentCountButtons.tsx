import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { EquipmentCountsKey } from "../../types/types";
import "./EquipmentCountButtons.css";

export const EquipmentCountButton = ({
  equipmentName,
  countDirection,
  onClick,
}: {
  countDirection: "Up" | "Down";
  equipmentName: EquipmentCountsKey;
  onClick: () => void;
}) => {
  const theme = useContext(ThemeContext)
  
  return (
    <button onClick={onClick} className={`equipmentCountButton ${theme}`}>
      {countDirection === "Up" ? `⬆️ ${equipmentName}` : ` ${equipmentName} ⬇️`}
    </button>
  );
}

export const EquipmentCountButtons = ({
  countEquipment,
  equipmentName,
}: {
  countEquipment: any; // TODO: replace this with correct type
  equipmentName: EquipmentCountsKey;
}) => {
  return (
    <div className="equipmentCountButtonsRow">
      <ThemeContext.Provider value={'light'}>
        <EquipmentCountButton
          countDirection={"Up"}
          equipmentName={equipmentName}
          onClick={() => {
            countEquipment(equipmentName, 1);
          }}
        ></EquipmentCountButton>
        <EquipmentCountButton
          countDirection={"Down"}
          equipmentName={equipmentName}
          onClick={() => {
            countEquipment(equipmentName, -1);
          }}
        ></EquipmentCountButton>
      </ThemeContext.Provider>
    </div>
  );
}
