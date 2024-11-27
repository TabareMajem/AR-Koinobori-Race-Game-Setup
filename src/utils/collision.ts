import * as THREE from 'three';
import type { Obstacle } from '../types/game';

export function checkCollision(
  carpPosition: THREE.Vector3,
  obstacle: Obstacle,
  threshold = 1
): boolean {
  const obstaclePos = new THREE.Vector3(...obstacle.position);
  return carpPosition.distanceTo(obstaclePos) < threshold;
}