import React from "react";
import {Link} from 'react-router-dom'
import "./productabout.css";
// import img1 from '../../img/image1.jpg'
import Button from "../../utils/Button";
import Zoom from "react-reveal/Zoom";

const Productabout = (props) => {
  const pimgstyle = {
    backgroundImage: `url(${props.itemToDisplay.image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div className="apcontainer">
      <Zoom>
      <div className="apdetailscontainer center">
        <div
          className="aboutclose btn red darken-3"
          onClick={() => props.testShow({})}
        >
          X
        </div>
        <div className="pimage" style={pimgstyle}>
          {/* <img src={img1} alt="" className="responsive-img"/> */}
        </div>
        <div className="pabout center">
          <p className="pname">{props.itemToDisplay.title}</p>
          <p className="pdesc">{props.itemToDisplay.desc}</p>
          <Link to="/contact">
            <Button buttontext="Order" />
          </Link>
        </div>
      </div>
      </Zoom>
    </div>
  );
};

export default Productabout;
