export enum CymbalEnum {
  'crashCymbal' = 'Crash Cymbal',
  'rideCymbal' = 'Ride Cymbal',
  'splashCymbal' = 'Splash Cymbal',
  'chinaCymbal' = 'China Cymbal',
}
export type CymbalEnumKey = keyof typeof CymbalEnum;
export type CymbalCounts = Record<keyof typeof CymbalEnum, number>;
