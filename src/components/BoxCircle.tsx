import { FC, Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";
import AnimatedSphere from "./AnimatesSphere";

const BoxCircle: FC = () => {
    return (
        <>
            <Canvas className="canvas">
                <OrbitControls enableZoom={ false }/>
                <ambientLight intensity={ 0.5 }/>
                <directionalLight position={ [ -2, 5, 2 ] } intensity={ 1 }/>
                <Suspense fallback={ null }>
                    <Box />
                </Suspense>
            </Canvas>
            <Canvas className="canvas">
                <OrbitControls enableZoom={ false }/>
                <ambientLight intensity={ 0.5 }/>
                <directionalLight position={ [ -2, 5, 2 ] } intensity={ 1 }/>
                <Suspense fallback={ null }>
                    <AnimatedSphere/>
                </Suspense>
            </Canvas>
        </>
    );
};

export default BoxCircle;
