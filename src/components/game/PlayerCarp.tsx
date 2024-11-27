import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useGameStore } from '../../store/gameStore';

export function PlayerCarp() {
  const carpRef = useRef<THREE.Group>(null);
  const selectedCarp = useGameStore((state) => state.selectedCarp);
  
  // Temporary box geometry until we have the actual model
  return (
    <mesh position={[0, 1, 0]} scale={[1, 0.5, 2]}>
      <boxGeometry />
      <meshStandardMaterial color={selectedCarp?.color || '#FFD700'} />
    </mesh>
  );
}

// Preload model
useGLTF.preload('/models/golden-carp.glb');