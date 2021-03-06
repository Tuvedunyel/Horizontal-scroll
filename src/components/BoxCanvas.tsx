import React, { FC, useRef, useState } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { softShadows, Box, MeshWobbleMaterial } from "@react-three/drei";
import { Mesh, Vector3 } from "three";
import { spinningBox } from "../interfaces/spinningBox";
import { useSpring, a } from '@react-spring/three';

softShadows();

// Création d'un composant séparé pour qu'useFrame ne fasse un render que du mesh et non de tout le composant


const SpinningBox: FC<spinningBox> = ( { position, args, color, speed } ) => {
    const mesh = useRef<Mesh | null>( null )
    const [expand, setExpand] = useState(false);
    const props = useSpring<{ scale: Vector3 }>({
        scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
    })


    // Realise un rendu de la scene à chaque frame (d'où le composant unique pour cela)
    useFrame( () => (mesh.current!.rotation.x = mesh.current!.rotation.y += 0.01) )
    return (
        <a.mesh onClick={ () => setExpand(!expand) } scale={props.scale} castShadow position={ position } ref={ mesh }>
            <boxBufferGeometry attach='geometry' args={ args }/>
            <MeshWobbleMaterial attach='material' color={ color } speed={speed} factor={0.6} />
        </a.mesh>
    )
}

const BoxCanvas: FC = () => {
    const shadow = useRef<Mesh>(null!)


    return (
        <Canvas shadows camera={ { position: [ -5, 2, 10 ], fov: 60 } }>
            <ambientLight intensity={ 0.3 }/>
            <directionalLight
                castShadow
                position={ [ 0, 10, 0 ] }
                intensity={ 1 }
                shadow-mapSize-width={ 1024 }
                shadow-mapSize-height={ 1024 }
                shadow-camera-far={ 50 }
                shadow-camera-left={ -10 }
                shadow-camera-right={ 10 }
                shadow-camera-top={ 10 }
                shadow-camera-bottom={ -10 }
            />
            <pointLight position={ [ -10, 0, -20 ] } intensity={ 0.5 }/>
            <pointLight position={ [ 0, -10, 0 ] } intensity={ 1.5 }/>

            <group>
                <mesh  receiveShadow rotation={ [ -Math.PI / 2, 0, 0 ] } position={ [ 0, -3, 0 ] }>
                    <planeBufferGeometry attach='geometry' args={ [ 100, 100 ] }/>
                    <shadowMaterial attach='material' opacity={0.3} />
                </mesh>
                <SpinningBox position={ [ 0, 1, 0 ] } args={ [ 3, 2, 1 ] } color='lightblue' speed={ 2 }/>
                <SpinningBox position={ [ -2, 1, -5 ] } color='pink' speed={ 4 }/>
                <SpinningBox position={ [ 5, 1, -2 ] } color='pink' speed={ 4 }/>
            </group>

            {/* Version plus simple avec Drei */ }
            {/*<Box>*/ }
            {/*    <meshStandardMaterial attach="material" />*/ }
            {/*</Box>*/ }
        </Canvas>
    );
};

export default BoxCanvas;
