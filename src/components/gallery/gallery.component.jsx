import React, { Component } from "react";
import "./gallery.styles.css";
import Gallerycard from "./gallerycard";
import Headings from "../../utils/headings";

import img1 from "../../img/image1.jpg";
import img2 from "../../img/image2.jpg";
import img3 from "../../img/image3.jpg";
import img4 from "../../img/image4.jpg";
import img5 from "../../img/image5.jpg";
import img6 from "../../img/image6.jpg";
import img8 from "../../img/image8.jpg";
import img9 from "../../img/image9.jpg";
import img10 from "../../img/image10.jpg";
import img11 from "../../img/image11.jpg";
import img12 from "../../img/image12.jpg";
import img13 from "../../img/image13.jpg";
import img14 from "../../img/image14.jpg";
import img15 from "../../img/image15.jpg";
import img16 from "../../img/image16.jpg";
import img17 from "../../img/image17.jpg";
import img18 from "../../img/image18.jpg";
import img19 from "../../img/image19.jpg";
import img20 from "../../img/image20.jpg";
import img21 from "../../img/image21.jpg";

class Gallery extends Component {
  state = {
    images: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
      img17,
      img18,
      img19,
      img20,
      img21,
    ],
  };

  componentDidMount() {
    
  }

  render() {
    return (
      <div id="gallerycomponent">
        <Headings text={localStorage.getItem('gallery')} color="var(--themecolor)" />
        <div className="gallerycardcontainer row">
          {this.state.images.map((image, index) => {
            if (this.props.limitit) {
                return(
                  index<this.props.limitit? <Gallerycard key={index} currentimage={image} /> : ''
                )
              
            }
            else{
               return <Gallerycard key={index} currentimage={image} />; 
            }
            
          })}
        </div>
      </div>
    );
  }
}

export default Gallery;
