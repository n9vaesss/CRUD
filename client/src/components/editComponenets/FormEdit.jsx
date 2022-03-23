import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Formik, Form, Field } from 'formik';
import Axios from "axios";
import { useNavigate } from 'react-router';

import "../../style/FormEdit.css"


function FormEdit() {

    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(["cpf"]);

    const [name, setname] = useState('')
    const [cpf, setcpf] = useState('')
    const [data, setdata] = useState('')
    const [cargo, setcargo] = useState('')

    useEffect(() => {

        Axios.post("http://localhost:3001/infoCRUD",{
            cpf: cookies.cpf 
         }).then((response) => {
            setname(response.data[0].nome_usuario)
            setcpf(response.data[0].cpf_usuario)
            setdata(response.data[0].data_adm_usuario)
            setcargo(response.data[0].cargo_usuario)
        })

    }, [])

    const handleChangeName = (e) =>{setname(e.target.value)}

    const handleChangeCpf = (e) =>{setcpf(e.target.value)}

    const handleChangeData = (e) =>{setdata(e.target.value)}

    const handleChangeCargo = (e) =>{setcargo(e.target.value)}

    const handleSave = () =>{
        Axios.put("http://localhost:3001/save",{
            name: name,
            cpf: cpf,
            data: data,
            cargo: cargo,
            cpfOld: cookies.cpf 
        }).then((response) =>{
            alert(response.data.msg)
            navigate('/')
        })
    }

    const handleDelete = () =>{
        Axios.delete(`http://localhost:3001/delete/${cpf}`).then((response)=>{
            alert(response.data.msg)
            navigate('/')
        });
        
    }

    
  return (
    <>
        <div className="div-main-infocrud">
            <h1>Informações do Usuario:</h1>
            <Formik
                initialValues={{}}
                onSubmit={handleSave}
            >
                <Form className="div-grid-form">
                    <Field
                        className="fieldname"
                        name={"name"}
                        value={name}
                        onChange={handleChangeName}
                        type={"input"}
                    />
                    <Field
                        className="fieldcpf"
                        name={"cpf"}
                        value={cpf}
                        onChange={handleChangeCpf}
                    />
                    <Field
                        className="fielddata"
                        name={"data"}
                        value={data}
                        type = "date"
                        onChange={handleChangeData}
                    />
                    <Field
                        className="fieldcargo"
                        name={"cargo"}
                        value={cargo}
                        onChange={handleChangeCargo}
                    />

                        <button type="submit">Salvar alterações</button>
                        
                </Form>
            </Formik>
            
            <button onClick={handleDelete} className= "button-delete">Deletar Usuario</button>

        </div>
    
    </>
  )
}

export default FormEdit