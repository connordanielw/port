'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Sphere,
  MeshDistortMaterial,
  OrbitControls,
  ContactShadows,
} from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export default function HeroVisual() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 3] }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[2, 4, 4]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <MorphingBlob />

     
      <ContactShadows
        position={[0, -1.25, 0]}
        opacity={0.45}
        scale={4}
        blur={3}
        far={6}
        color="#000000"
      />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  );
}

function MorphingBlob() {
  const mat = useRef();

  const c1 = new THREE.Color('#46a6ff');
  const c2 = new THREE.Color('#ff2dfd');
  const c3 = new THREE.Color('#ffe942');

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const phase = (t % 8) / 8;

    let col;
    if (phase < 0.33) {
      col = c1.clone().lerp(c2, phase / 0.33);
    } else if (phase < 0.66) {
      col = c2.clone().lerp(c3, (phase - 0.33) / 0.33);
    } else {
      col = c3.clone().lerp(c1, (phase - 0.66) / 0.34);
    }

    const distort = 0.4 + 0.15 * Math.sin(t * 1.2);
    const emissiveIntensity = 0.6 + 0.4 * Math.sin(t * 0.9);

    if (mat.current) {
      mat.current.color.copy(col);
      mat.current.emissive.copy(col);
      mat.current.emissiveIntensity = emissiveIntensity;
      mat.current.metalness = 0.9;
      mat.current.roughness = 0.05;
      mat.current.distort = distort;
    }
  });

  return (
    <Sphere args={[1.2, 64, 64]} castShadow>
      <MeshDistortMaterial ref={mat} speed={2} />
    </Sphere>
  );
}
