import React from 'react'

import Nav from '../navComponents/Nav'
import FormEdit from './FormEdit'

function BodyEdit() {
  return (
    <>
        <div className="section-form-main">

            <header className="header-back">
                
            </header>

            <div className="section-form-align">

                <Nav/>

                <body className="body-inside">
                  <FormEdit/>
                </body>

            </div>

            <body className="body-back">
                
            </body>

        </div>
    </>
  )
}

export default BodyEdit