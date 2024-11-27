import { useEffect, useCallback } from 'react';
import { useGameStore } from '../store/gameStore';

export function useControls() {
  const updateScore = useGameStore((state) => state.updateScore);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        // Move left
        break;
      case 'ArrowRight':
        // Move right
        break;
      case 'Space':
        // Jump
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return null;
}