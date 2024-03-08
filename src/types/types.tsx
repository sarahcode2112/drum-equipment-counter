type CymbalCountBase = {
  'Crash Cymbals': number,
  'Ride Cymbals': number,
  'Splash Cymbals': number,
  'China Cymbals': number,
}

export type CymbalCounts = {
  [Key in keyof CymbalCountBase]: number;
} & {
  [key: string]: number;
};

export type CymbalCountsKey = 
  keyof CymbalCountBase | string