import React from 'react';
import { useGameStore } from './store/gameStore';
import { StartScreen } from './components/StartScreen';
import { Game } from './components/Game';

function App() {
  const isPlaying = useGameStore((state) => state.isPlaying);

  return (
    <div className="w-full h-screen">
      {isPlaying ? <Game /> : <StartScreen />}
    </div>
  );
}

export default App;