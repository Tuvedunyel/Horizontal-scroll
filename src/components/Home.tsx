import { FC, Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Box from "./Box";
import './style.css'
import AnimatedSphere from "./AnimatesSphere";


const Home: FC = () => {

    return (
        <>
            <h1>Hello</h1>
            <Canvas className="canvas">
                <OrbitControls enableZoom={ false }/>
                <ambientLight intensity={ 0.5 }/>
                <directionalLight position={ [ -2, 5, 2 ] } intensity={ 1 }/>
                <Suspense fallback={ null }>
                    <Box/>
                </Suspense>
            </Canvas>
            <Canvas className="canvas">
                <OrbitControls enableZoom={ false }/>
                <ambientLight intensity={ 0.5 }/>
                <directionalLight position={ [ -2, 5, 2 ] } intensity={ 1 }/>
                <Suspense fallback={ null }>
                    <AnimatedSphere />
                </Suspense>
            </Canvas>
        </>
    );
}

export default Home;

