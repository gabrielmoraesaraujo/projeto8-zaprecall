import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from './Inicio';
import Perguntas from './Perguntas';


export default function App(){

    return(
        <BrowserRouter>

            <Routes>
                <Route path="/" element={ <Inicio />} />
                <Route path="/Perguntas" element={ <Perguntas /> }/>
            </Routes>
         
        </BrowserRouter>
    );
}