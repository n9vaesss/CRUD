import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from './components/bodyComponents/Body'
import BodyEdit from "./components/editComponenets/BodyEdit";
import Edit from "./components/editComponenets/Edit";
import Home from "./components/home/Home";

function Rotas(){
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/criar" element={<Body/>}/>
        <Route path="/posedit" element={<BodyEdit/>}/>
      </Routes>
    </BrowserRouter> 
    )
}

export default Rotas