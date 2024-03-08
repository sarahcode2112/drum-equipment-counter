// this first type is probably unecessary now
type CymbalCountBase = {
  'Crash Cymbals': number,
  'Ride Cymbals': number,
  'Splash Cymbals': number,
  'China Cymbals': number,
}

export type CymbalCounts = {
  [key: string]: number;
};

export type CymbalCountsKey = 
  keyof CymbalCountBase | string