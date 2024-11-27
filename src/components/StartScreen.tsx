import React from 'react';
import { Play, Book, Trophy, Settings } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export function StartScreen() {
  const startGame = useGameStore((state) => state.startGame);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="bg-white rounded-lg p-8 shadow-xl max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
          Koinobori Race
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={startGame}
            className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Play size={24} />
            Start Race
          </button>
          
          <button className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors">
            <Book size={24} />
            Tutorial
          </button>
          
          <button className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors">
            <Trophy size={24} />
            Achievements
          </button>
          
          <button className="w-full flex items-center justify-center gap-2 bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors">
            <Settings size={24} />
            Settings
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-600 text-center">
          Join the magical world of Koinobori and race through enchanted rivers!
        </p>
      </div>
    </div>
  );
}