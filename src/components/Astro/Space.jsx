import { Canvas } from "@react-three/fiber";
import {Suspense,useEffect,useState} from "react";
import { OrbitControls,Preload,useGLTF } from "@react-three/drei";
import { Station } from "./Station";
import { LoaderProg } from "../WorkStation/LoaderProg";

export const Space = () => {
   return (
        <Canvas tyle={{ height: '80vh' }}
        frameLoop="demand"
        shadows
        camera={{ position: [25, 25, 25], fov: 10, near: 1, far: 1000 }}

        gl={{preserveDrawingBuffer:true}}>
            <Suspense fallback={<LoaderProg/>}>
            <OrbitControls
           // autoRotate={true}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            />
            <Station/>
            </Suspense>
          <Preload all/>
            
        </Canvas>
   )
 };
 
 