import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Obstacle } from '../../types/game';

const INITIAL_OBSTACLES: Obstacle[] = [
  {
    id: 'log-1',
    type: 'log',
    position: [0, 0, -10],
    rotation: [0, 0, 0],
  },
  {
    id: 'rock-1',
    type: 'rock',
    position: [2, 0, -20],
    rotation: [0, Math.PI / 4, 0],
  },
];

export function Obstacles() {
  const obstaclesRef = useRef<THREE.Group>(null);

  const renderObstacle = (obstacle: Obstacle) => {
    switch (obstacle.type) {
      case 'log':
        return (
          <mesh
            key={obstacle.id}
            position={obstacle.position}
            rotation={obstacle.rotation}
          >
            <cylinderGeometry args={[0.3, 0.3, 4]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
        );
      case 'rock':
        return (
          <mesh
            key={obstacle.id}
            position={obstacle.position}
            rotation={obstacle.rotation}
          >
            <dodecahedronGeometry args={[1]} />
            <meshStandardMaterial color="#808080" />
          </mesh>
        );
      default:
        return null;
    }
  };

  return (
    <group ref={obstaclesRef}>
      {INITIAL_OBSTACLES.map(renderObstacle)}
    </group>
  );
}