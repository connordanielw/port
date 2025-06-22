'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei';

export default function HeroVisual() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }} gl={{ alpha: true, antialias: true }}>
      {/* transparent background – inherits page colour */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1} />

      {/* morphing blob */}
      <Sphere args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#a366ff"
          distort={0.45}    // amount of wobble
          speed={2}         // animation speed
          roughness={0.15}
          metalness={0.65}
        />
      </Sphere>

      {/* gentle auto-rotation, no zoom/pan */}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.4} />
    </Canvas>
  );
}
