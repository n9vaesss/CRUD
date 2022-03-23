import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from 'react-router';
import Axios from "axios";
import * as yup from "yup"

import '../../style/Form.css'

function Forms(props) {

  const navigate = useNavigate();
  
  const handleSubmitInsert = (values) => {
      Axios.post("http://localhost:3001/insert",{
        name: values.name,
        cpf: values.cpf,
        date: values.date,
        office: values.office,
      }).then((response)=>{
        console.log(response)
        if(response.data.msg == 1){
          alert("Usuario cadastrado")
          navigate('/')
        }
      })
  }

  const validationInsert = yup.object().shape({
    name: yup
    .string()
    .required("Preencha todos campos corretamente")
    .max(50,  "Deve haver no maximo 50 caracteres"),
    cpf: yup
    .string()
    .required("Preencha todos campos corretamente")
    .max(50, "Deve haver no maximo 50 caracteres"),
    date: yup
    .string()
    .required("Preencha todos campos corretamente")
    .max(50, "Deve haver no maximo 50 caracteres"),
    office: yup
    .string()
    .required("Preencha todos campos corretamente")
    .max(50, "Deve haver no maximo 50 caracteres"),
    
})

  return (
    <>
        <div className='div-main-form'>

          <h1>Insira as informações a baixo</h1>

            <Formik
              initialValues={{  }}
              onSubmit={handleSubmitInsert}
              validationSchema = {validationInsert}
            >

              <Form>

                <div className='div-grid-form'>

                    <Field type="text" placeholder='Nome' className='input-name' name="name"  />

                    <Field type="text" placeholder='CPF' className='input-cpf' name="cpf"  />

                    <Field type="date" placeholder='Data de admição' className='input-dt' name="date" />
                
                    <Field type="text" placeholder='Cargo' className='input-cargo' name="office"  />

                </div>
                
                  <button className='button-submit-form' type='submit'>Criar usuario</button>

                    <div className='div-form-error'>
                      <ErrorMessage
                        component="span"
                        name="name"
                        className="form-error"
                      />
                      <ErrorMessage
                        component="span"
                        name="cpf"
                        className="form-error"
                      />
                      <ErrorMessage
                        component="span"
                        name="date"
                        className="form-error"
                      />
                      <ErrorMessage
                        component="span"
                        name="office"
                        className="form-error"
                      />
                    </div>

              </Form>

            </Formik>

        </div>
    </>
  )
}

export default Forms