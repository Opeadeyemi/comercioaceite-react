import React, { Component } from "react";
import "./products.styles.css";
import Productcard from "../productcard/productcard";
import Headings from "../../utils/headings";
import Productabout from "./productabout";

import img13 from "../../img/image13.jpg";
import img3 from "../../img/image3.jpg";
import img12 from "../../img/image12.jpg";
import img22 from "../../img/image22.jpg";
import img23 from "../../img/image23.jpg";
import img24 from "../../img/image24.jpg";
import img25 from "../../img/image25.jpg";
import img26 from "../../img/image26.jpg";
import img27 from "../../img/image27.jpeg";
import img28 from "../../img/image28.jpg";
import img29 from '../../img/image29.jpg'
import img30 from '../../img/image30.jpg'
import img31 from '../../img/image31.jpg'
import img32 from '../../img/image32.jpg'
import img33 from '../../img/image33.jpg'
import img34 from '../../img/image34.jpg'

class Products extends Component {
  state = {
    products: [
      {
        title: localStorage.getItem('beatsugar'),
        image: img13,
        desc:localStorage.getItem('beatsugardesc')
      },
      {
        title: localStorage.getItem('refinedsunflower'),
        image: img3,
        desc:localStorage.getItem('refinedsunflowerdesc')
      },
      {
        title: localStorage.getItem('usedcookingoil'),
        image: img12,
        desc:localStorage.getItem('usedcookingoildesc')
      },
      {
        title: localStorage.getItem('palmoil'),
        image: img22,
        desc:localStorage.getItem('palmoildesc')
      },
      {
        title: localStorage.getItem('moringaoil'),
        image: img23,
        desc:localStorage.getItem('moringaoildesc')
      },
      {
        title: localStorage.getItem('coconutoil'),
        image: img24,
        desc:localStorage.getItem('coconutoildesc')
      },
      {
        title: localStorage.getItem('bergamotoil'),
        image: img25,
        desc:localStorage.getItem('bergamotoildesc'),
      },
      {
        title: localStorage.getItem('gingeroil'),
        image: img26,
        desc:localStorage.getItem('gingeroildesc')
      },
      {
        title: localStorage.getItem('yellowmaize'),
        image: img27,
        desc: localStorage.getItem('yellowmaizedesc')
      },
      {
        title: localStorage.getItem('whitemaize'),
        image: img28,
        desc:localStorage.getItem('whitemaizedesc')
      },
      {
        title: localStorage.getItem('soybeansoil'),
        image: img29,
        desc:localStorage.getItem('soybeansoildesc')
      },
      {
        title: localStorage.getItem('canolaoil'),
        image: img30,
        desc:localStorage.getItem('canolaoildesc')
      },
      {
        title: localStorage.getItem('mustardoil'),
        image: img31,
        desc:localStorage.getItem('mustardoildesc')
      },
      {
        title: localStorage.getItem('neemextract'),
        image: img32,
        desc:localStorage.getItem('neemextractdesc')
      },
      {
        title: localStorage.getItem('lemonoil'),
        image: img33,
        desc:localStorage.getItem('lemonoildesc')
      },
      {
        title: localStorage.getItem('walnutoil'),
        image: img34,
        desc:localStorage.getItem('walnutoildesc')
      },
    ],
    showProductDetails: false,
    detailsProduct: {},
  };

  setShowProductDetails = (item) => {
 
    this.setState({
      detailsProduct: item,
      showProductDetails: !this.state.showProductDetails,
    });
  };
  render() {
    return (
      <div className="productscontainer" id="productscomponent">
        <Headings text={localStorage.getItem('ourproducts')} color="var(--themecolor)" />
        <div className="cardcontainer row center-text">
          {/* <Productabout/> */}
          {this.state.showProductDetails ? (
            <Productabout
              itemToDisplay={this.state.detailsProduct}
              testShow={this.setShowProductDetails}
            />
          ) : (
            ""
          )}
          {this.state.products.map((product, index) => {
            return (
              <Productcard
                key={index}
                currentproduct={product}
                testShow={this.setShowProductDetails}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
