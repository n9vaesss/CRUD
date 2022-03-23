import React, {useState} from 'react';
import { useNavigate } from 'react-router';

import { FiAlignJustify } from "react-icons/fi";

import '../../style/Nav.css'

function Nav() {

  const [showLinks, setshowLinks] = useState(false);

  const navigate = useNavigate();

  const handleHom = () =>{
    navigate('/')
  }

  const handleEdi = () =>{
    navigate('/edit')
  }

  const handleCri = () =>{
    navigate('/criar')
  }

  return (
    <>
        <div className="nav-main">

            <div className='align-button'>

                <FiAlignJustify className='icon-nav' onClick={()=> setshowLinks(!showLinks)}/>

                <div className='links-nav' id={showLinks ? "hidden" : ""}>
                  <button onClick = {handleHom} >Home</button>
                  <button onClick = {handleEdi} >Editar</button>
                  <button onClick = {handleCri} >Criar</button>
                </div>

            </div>

        </div>
    </>
  )
}

export default Nav;
