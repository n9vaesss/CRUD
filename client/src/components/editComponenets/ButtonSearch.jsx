import React from 'react'
import {Formik, Form} from 'formik';
import { useNavigate } from 'react-router';
import { useCookies } from "react-cookie";

function ButtonSearch (props) {

    const [cookies, setCookie] = useCookies(["cpf"]);

    const navigate = useNavigate();

    const handleSubmitSeacrch = () =>{
        setCookie("cpf", props.cpf, {path: "/"});
        navigate('/posedit')
    }

  return (
    <>
        <Formik
            initialValues = {{}}
            onSubmit = {handleSubmitSeacrch}
        >
        
            <Form className='form-search'>

                <button type='submit' className='button-search'>{props.nome} - {props.cpf} - {props.cargo}</button>

            </Form>

        </Formik>

    </>
  )
}

export default ButtonSearch