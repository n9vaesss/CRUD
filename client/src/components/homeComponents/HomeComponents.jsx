import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import Foto from '../../image/pp.jpg'

import '../../style/Home.css'

function HomeComponents() {
  return (
    <div className='main-home'>
        <h1 className='title-crud'>CRUD (Create, Read, Update, Delete)</h1>

        <img src={Foto} alt=""  className='foto-crud'/>

        <div className='aling-icons'>
            <a href="https://github.com/JhonatanTL" className='a1' target="_blank">
                <BsGithub className='git'/> 
            </a>
            <a href="https://www.linkedin.com/in/jhonatanteles/" target="_blank" className='a2'> 
                <BsLinkedin className='link'/> 
            </a>
        </div>
    </div>
  )
}

export default HomeComponents