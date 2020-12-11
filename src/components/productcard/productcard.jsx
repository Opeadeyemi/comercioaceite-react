import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './productcard.css'
// import img13 from '../../img/image13.jpg'
import Button from '../../utils/Button';
import Slide from 'react-reveal/Slide';
import Productabout from '../products/productabout'



const Productcard = (props) => {



    const cardimgstyle = {
        backgroundImage: `url(${props.currentproduct.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'

    }

    const setShow =()=>{
       
    }

    return (
        <div className="productcard col s12 m6 l4 center"  onClick={()=>props.testShow(props.currentproduct)}>
            <Slide bottom>
                <div className="card pcard">
                    <div className="cardimg" style={cardimgstyle}></div>

                    <div className="cardcontent">
                        <h3 className="red-text cardtitle">{props.currentproduct.title}</h3>
                        <p className="cardtext">
                            {props.currentproduct.desc}
                        </p>
                        <Link to="/contact">
                            <Button buttontext={localStorage.getItem('order')} />
                        </Link>

                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Productcard