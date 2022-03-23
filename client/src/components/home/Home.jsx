import React from 'react'
import HomeComponents from '../homeComponents/HomeComponents'
import Nav from '../navComponents/Nav'

function Home() {
  return (
    <>
       <div className="section-form-main">

            <header className="header-back">
                
            </header>

                <div className="section-form-align">

                    <Nav/>

                    <body className="body-inside">
                        <HomeComponents/>
                    </body>

                </div>

            <body className="body-back">
                
            </body>

        </div> 
    </>
  )
}

export default Home