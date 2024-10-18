import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export const Station = () => {
  const { scene, animations } = useGLTF('../../assets/3dmodels/SpaceBoy/scene.gltf');

  const [mixer] = useState(() => new THREE.AnimationMixer());

  useEffect(() => {
    if (animations && animations.length > 0) {
      const action = mixer.clipAction(animations[0], scene);
      action.play();
    }
    return () => mixer.stopAllAction(); // Cleanup on unmount
  }, [animations, scene, mixer]);

  useFrame((_, delta) => mixer.update(delta));

  return (
    <mesh>
      <hemisphereLight intensity={5.15} />
      <pointLight intensity={10} />
      <spotLight
        position={[-20, 60, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        scale={1.80}
        position={[-2, -3.25, 0.5]}
        object={scene} 
      />
    </mesh>
  );
};