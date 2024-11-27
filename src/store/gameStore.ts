import { create } from 'zustand';
import type { GameState, Carp } from '../types/game';

const DEFAULT_CARP: Carp = {
  id: 'golden-carp',
  name: 'Golden Carp',
  color: '#FFD700',
  speed: 1,
  jumpHeight: 1,
  model: '/models/golden-carp.glb',
  unlocked: true,
};

interface GameStore extends GameState {
  startGame: () => void;
  endGame: () => void;
  updateScore: (score: number) => void;
  selectCarp: (carp: Carp) => void;
  unlockCarp: (carpId: string) => void;
  addBadge: (badge: string) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  isPlaying: false,
  currentScore: 0,
  highScore: 0,
  selectedCarp: DEFAULT_CARP,
  unlockedCarps: [DEFAULT_CARP.id],
  badges: [],

  startGame: () => set({ isPlaying: true, currentScore: 0 }),
  endGame: () => set((state) => ({ 
    isPlaying: false,
    highScore: Math.max(state.highScore, state.currentScore)
  })),
  updateScore: (score) => set({ currentScore: score }),
  selectCarp: (carp) => set({ selectedCarp: carp }),
  unlockCarp: (carpId) => set((state) => ({
    unlockedCarps: [...state.unlockedCarps, carpId]
  })),
  addBadge: (badge) => set((state) => ({
    badges: [...state.badges, badge]
  }))
}));