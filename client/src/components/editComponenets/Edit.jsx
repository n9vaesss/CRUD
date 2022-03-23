import React from 'react'
import Nav from '../navComponents/Nav'
import Search from './Search'

function Edit() {
  return (
    <>
        <div className="section-form-main">

            <header className="header-back">
                
            </header>

            <div className="section-form-align">

                <Nav/>

                <body className="body-inside">
                  <Search/>
                </body>

            </div>

            <body className="body-back">
                
            </body>

        </div>
    </>
  )
}

export default Edit