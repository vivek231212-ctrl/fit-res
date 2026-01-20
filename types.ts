
export enum HungerLevel {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW'
}

export interface StatusItem {
  id: string;
  level: HungerLevel;
  segments: number;
  colorType: 'red' | 'orange' | 'yellow';
  isActive?: boolean;
}
