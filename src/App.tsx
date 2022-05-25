import { FC, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import { AnimatePresence } from "framer-motion";

const App: FC = () => {
    const [ count, setCount ] = useState( 0 )

    return (
        <AnimatePresence >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/about" element={ <About/> }/>
                </Routes>
            </BrowserRouter>
        </AnimatePresence>
    )
}

export default App
