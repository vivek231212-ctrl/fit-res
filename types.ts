
export enum HungerLevel {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low'
}

export interface StatusItem {
  id: string;
  level: HungerLevel;
  segments: number;
  colorType: 'red' | 'orange' | 'yellow';
  isActive?: boolean;
}
