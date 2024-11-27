import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { River } from './game/River';
import { PlayerCarp } from './game/PlayerCarp';
import { Obstacles } from './game/Obstacles';

export function Game() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          <River />
          <PlayerCarp />
          <Obstacles />
          
          <OrbitControls />
        </Suspense>
      </Canvas>
      
      <div className="absolute top-4 left-4 bg-white/80 rounded-lg p-4">
        <h2 className="text-xl font-bold">Score: 0</h2>
      </div>
    </div>
  );
}