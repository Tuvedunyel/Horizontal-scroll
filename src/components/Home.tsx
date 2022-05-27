import { FC, useState } from 'react';
import './style.css'
import BoxCircle from "./BoxCircle";
import BoxCanvas from "./BoxCanvas";


const Home: FC = () => {
    const [ showBox, setShowBox ] = useState( false )

    return (
        <>
            <h1>Hello</h1>
            <button onClick={ () => setShowBox(!showBox) }>Changer de plan</button>
            { showBox ? <BoxCanvas /> : <BoxCircle /> }

        </>
    );
}

export default Home;

