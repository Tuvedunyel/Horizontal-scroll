import { FC, useState } from 'react';
import BoxCircle from "./BoxCircle";
import BoxCanvas from "./BoxCanvas";


const Home: FC = () => {
    const [ showBox, setShowBox ] = useState( false )

    return (
        <section>
            <button className="button" onClick={ () => setShowBox(!showBox) }>Changer de plan</button>
            { showBox ? <BoxCanvas /> : <BoxCircle /> }

        </section>
    );
}

export default Home;

