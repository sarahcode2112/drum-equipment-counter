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
  return (
    <button onClick={onClick} className="equipmentCountButton">
      {countDirection === "Up" ? `⬆️ ${equipmentName}` : ` ${equipmentName} ⬇️`}
    </button>
  );
}

export const EquipmentCountButtons = ({
  countEquipment,
  equipmentName,
}: {
  countEquipment: any;
  equipmentName: EquipmentCountsKey;
}) => {
  return (
    <div className="equipmentCountButtonsRow">
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
    </div>
  );
}
