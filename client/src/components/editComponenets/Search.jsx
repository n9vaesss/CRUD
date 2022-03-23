import React, { useState, useEffect } from "react";
import Axios from "axios";

import ButtonSearch from "./ButtonSearch";

import '../../style/Search.css'

function Search() {

    const [lisInfoSearch, setlisInfoSearch] = useState()
    const [search, setsearch] = useState()

    useEffect(() => {

        const params = '%' + search + '%';

        Axios.post("http://localhost:3001/search",{
            params : params,
        }).then((response) => {
            setlisInfoSearch(response.data)
        })

    }, [search])

  return (
    <div className='main-search'>
        <h1>Insira o nome do usuario que deseja pesquisar</h1>

        
            <input
                type="text"
                value =  { search }
                onChange={(ev) => setsearch(ev.target.value)}
                className="input-search"
                placeholder="Nome / CPF / Cargo"
            />

        <ul>
            {typeof lisInfoSearch !== "undefined" && lisInfoSearch.map((values) => {
                
                return <ButtonSearch
                    listInfo = {lisInfoSearch} 
                    setListInfo = {setlisInfoSearch}
                    nome = {values.nome_usuario}
                    cpf = {values.cpf_usuario}
                    cargo = {values.cargo_usuario}
                ></ButtonSearch>
            })}
        </ul>
    </div>
  )
}

export default Search