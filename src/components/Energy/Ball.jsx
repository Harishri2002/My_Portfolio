import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export const Ball = () => {
  const { scene, animations } = useGLTF('/3dmodels/energy.glb');
  const [mixer] = useState(() => new THREE.AnimationMixer());

  useEffect(() => {
    if (animations && animations.length > 0) {
      const action = mixer.clipAction(animations[0], scene);
      action.play();
    }
    return () => mixer.stopAllAction(); // Cleanup on unmount
  }, [animations, scene, mixer]);

  useEffect(() => {
    // Ensure materials respond to standard lighting
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: child.material.color,
          roughness: 0.5,
          metalness: 0.5,
        });
      }
    });
  }, [scene]);

  useFrame((_, delta) => mixer.update(delta));

  return (
    <mesh>
      <ambientLight intensity={1.3} />
      <hemisphereLight intensity={1} color="white" groundColor="gray" />
      <pointLight position={[0, 10, 10]} intensity={1841} />
      <spotLight
        position={[0, 20, 20]}
        angle={0.3}
        penumbra={0.5}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        scale={1.8}
        position={[0, 0, 0]}
        object={scene} 
      />
    </mesh>
  );
};
