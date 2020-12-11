import React from 'react'
import './gallerycard.css'
import img1 from '../../img/image1.jpg'
import Zoom from 'react-reveal/Zoom';

const Gallerycard = (props) => {

    const gallerycardimgstyle = {
        backgroundImage: `url(${props.currentimage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'

    }
    return (
        <div className="productcard col s6 m4 l3 center">
            <Zoom>
                <div className="card gcard" style={gallerycardimgstyle}>

                </div>
            </Zoom>
        </div>
    )
}

export default Gallerycard