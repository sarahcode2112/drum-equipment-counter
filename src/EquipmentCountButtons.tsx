import { CymbalEnum, CymbalEnumKey } from './types';

function EquipmentCountButton({ equipmentName, countDirection, onClick }: { countDirection: 'Up' | 'Down'; equipmentName: CymbalEnum; onClick: () => void; }) {
  return (
    <button onClick={onClick}>
      {(countDirection === 'Up') ? `⬆️ ${equipmentName}` : ` ${equipmentName} ⬇️`}
    </button>
  );
}

export function EquipmentCountButtons({ countCymbals, equipmentName }: { countCymbals: any; equipmentName: CymbalEnumKey; }) {
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
