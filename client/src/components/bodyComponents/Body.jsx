import React from 'react';

import '../../style/Body.css'

import Forms from '../formComponents/Form';
import Nav from '../navComponents/Nav';

function Body() {

  return (
        <>
            <div className="section-form-main">

                <header className="header-back">
                    
                </header>
                
                <div className="section-form-align">

                    <Nav/>

                     <body className="body-inside">
                        <Forms/>
                     </body>

                </div>

                <body className="body-back">
                    
                </body>

            </div>
        </>
    )
}
export default Body;
