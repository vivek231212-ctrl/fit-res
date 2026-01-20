
export enum HungerLevel {
  HUNG = 'HUNG',
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
