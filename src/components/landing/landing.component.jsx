import React from 'react'
import '../../utils/normalize.css'
import './landing.styles.css'

import Header from '../header/header.component'
import Cta from '../cta/cta.component'

const Landing = ()=> {
    return (
        <div className="landingpage">
            <Cta/>
        </div>
    )
}

export default Landing;
