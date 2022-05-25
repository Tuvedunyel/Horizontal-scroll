import { FC } from 'react';
import './style.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';

const Sphere = () => {
    const [ref, api] = useBox( () => ( { mass: 0.2 } ) )
    return (
        <mesh onPointerEnter={() => {
            api.velocity.set(0, 5, 0)
        }} ref={ref} position={[0, 2, 0]}>
            <circleBufferGeometry attach="geometry" args={[5, 50]}  />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

const Plane = () => {
    const [ref] = usePlane( () => ( {
        rotation: [-Math.PI / 2, 0, 0],
    } ) )
    return (
        <mesh ref={ref} position={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshLambertMaterial attach="material" color="white" />
        </mesh>
    )
}

const Home: FC = () => {

        return (
            <Canvas>
                <OrbitControls />
                <Stars />
                <ambientLight intensity={ 0.5 } />
                <spotLight position={[10, 15, 10]} angle={0.3} />
                <Physics>
                    <Sphere />
                    <Plane />
                </Physics>
            </Canvas>
        );
    }
;

export default Home;
