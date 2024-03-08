import { CymbalCounts, CymbalCountsKey } from '../../types/types';
import './EquipmentCountButtons.css'

function EquipmentCountButton({ equipmentName, countDirection, onClick }: { countDirection: 'Up' | 'Down'; equipmentName: CymbalCountsKey; onClick: () => void; }) {
  return (
    <button onClick={onClick}>
      {(countDirection === 'Up') ? `⬆️ ${equipmentName}` : ` ${equipmentName} ⬇️`}
    </button>
  );
}

export function EquipmentCountButtons({ countCymbals, equipmentName }: { countCymbals: any; equipmentName: CymbalCountsKey; }) {
  return (
    <div className="equipmentCountButtonsRow">
      <EquipmentCountButton
        countDirection={"Up"}
        equipmentName={equipmentName}
        onClick={() => {
          countCymbals(equipmentName, 1);
        }}
      ></EquipmentCountButton>
      <EquipmentCountButton
        countDirection={"Down"}
        equipmentName={equipmentName}
        onClick={() => {
          countCymbals(equipmentName, -1);
        }}
      ></EquipmentCountButton>
    </div>
  );
}
