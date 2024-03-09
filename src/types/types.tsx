// this first type is probably unecessary now
type EquipmentCountBase = {
  "Crash Cymbals": number;
  "Ride Cymbals": number;
  "Splash Cymbals": number;
  "China Cymbals": number;
};

export type EquipmentCounts = {
  [key: string]: number;
};

export type EquipmentCountsKey = keyof EquipmentCountBase | string;
