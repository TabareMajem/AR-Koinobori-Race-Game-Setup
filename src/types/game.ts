export interface Carp {
  id: string;
  name: string;
  color: string;
  speed: number;
  jumpHeight: number;
  model: string;
  unlocked: boolean;
}

export interface GameState {
  isPlaying: boolean;
  currentScore: number;
  highScore: number;
  selectedCarp: Carp | null;
  unlockedCarps: string[];
  badges: string[];
}

export interface Obstacle {
  id: string;
  type: 'log' | 'rock' | 'waterfall';
  position: [number, number, number];
  rotation: [number, number, number];
}