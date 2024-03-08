export enum CymbalEnum {
  'crashCymbal' = 'Crash Cymbal',
  'rideCymbal' = 'Ride Cymbal',
  'splashCymbal' = 'Splash Cymbal',
  'chinaCymbal' = 'China Cymbal',
}

export type CymbalEnumKey = keyof typeof CymbalEnum;

export type CymbalCounts = {
  [Key in keyof typeof CymbalEnum]: number;
} & {
  [key: string]: number;
};
