import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function River() {
  const riverRef = useRef<THREE.Mesh>(null);
  const waterTexture = new THREE.TextureLoader().load(
    'https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?auto=format&fit=crop&w=1024&q=80'
  );
  
  waterTexture.wrapS = waterTexture.wrapT = THREE.RepeatWrapping;
  waterTexture.repeat.set(4, 20);
  
  useFrame((state, delta) => {
    if (riverRef.current) {
      waterTexture.offset.y -= delta * 0.1; // Scrolling water effect
    }
  });

  return (
    <mesh
      ref={riverRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.1, 0]}
    >
      <planeGeometry args={[10, 100]} />
      <meshStandardMaterial
        map={waterTexture}
        transparent
        opacity={0.8}
        color="#4a9eff"
        metalness={0.2}
        roughness={0.1}
      />
    </mesh>
  );
}