import React from 'react';
import { Link } from 'react-router-dom'
import './cta.styles.css'
import Bounce from 'react-reveal/Bounce';
import Carousel from './carousel'


const Cta = (props) => {
    return (
        <div className="ctacontainer">
            <Carousel/>
            {/* <div className="coloroverlay white-text center"> */}
                {/* <h1 className="we">WE</h1>
                <Bounce bottom>
                    <h3 className="businessdesc">manufacture oil, fats, vegetables and animal and Sugar Beet Icumsa 45</h3>
                </Bounce>
                <Link to="/about">
                    <button className="btn waves-effect waves-light btnlearnmore">Learn More</button>
                </Link> */}
                
            {/* </div> */}
        </div>
    )
}

export default Cta
