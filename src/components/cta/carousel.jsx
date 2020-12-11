import React, { Component } from "react";
import makeCarousel from "react-reveal/makeCarousel";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

import styled, { css } from "styled-components";
import "./carousel.css";

import land1 from "../../img/land1.jpg";
import land2 from "../../img/land2.jpg";
import land6 from "../../img/land6.jpg";
import land7 from "../../img/land7.jpg";
import land8 from "../../img/land8.jpg";
import land9 from "../../img/land9.jpg";
import land10 from "../../img/land10.jpg";
import land11 from "../../img/land11.jpg";
import back1 from "../../img/back1.jpg";
import back2 from "../../img/back2.jpg";
import back3 from "../../img/back3.jpg";
import back5 from "../../img/back5.jpeg";
import back6 from "../../img/back6.jpg";
import back7 from "../../img/back7.jpg";
import back8 from "../../img/back8.jpg";
import back9 from "../../img/back9.jpg";
import back10 from "../../img/back10.jpg";

class Carousel extends Component {
  state = {
    carouselinas: [
      {
        title: "Title1",
        img: land1,
      },
      {
        title: "Title2",
        img: land2,
      },
      {
        title: "Title6",
        img: land6,
      },
      {
        title: "Title6",
        img: land7,
      },
      {
        title: "Title6",
        img: land8,
      },
      {
        title: "Title6",
        img: land9,
      },
      {
        title: "Title6",
        img: land10,
      },
      {
        title: "Title6",
        img: land11,
      },
      {
        title: "Back1",
        img: back1,
      },
      {
        title: "Back1",
        img: back2,
      },
      {
        title: "Back1",
        img: back3,
      },
      {
        title: "Back1",
        img: back5,
      },
      {
        title: "Back1",
        img: back6,
      },
      {
        title: "Back1",
        img: back7,
      },
      {
        title: "Back1",
        img: back8,
      },
      {
        title: "Back1",
        img: back9,
      },
      {
        title: "Back1",
        img: back10,
      },
    ],
  };

  render() {
    const width = "100%",
      height = "100%";
    const Container = styled.div`
      //   border: 1px solid red;
      position: relative;
      overflow: hidden;
      width: ${width};
      height: ${height};
      display: flex;
      // background-color: red;
      align-items: center;
    `;
    const Arrow = styled.div`
      text-shadow: 1px 1px 1px #fff;
      z-index: 100;
      line-height: ${height};
      height: 100%;
      display: flex;
      align-items: center;
      background-color: transparent;
      text-align: center;
      position: absolute;
      top: 0;
      width: 10%;
      font-size: 1.3em;
      cursor: pointer;
      user-select: none;
      color: white;
      ${(props) =>
        props.right
          ? css`
              left: 90%;
            `
          : css`
              left: 0%;
            `}
    `;

    const CarouselUI = ({ position, handleClick, children }) => (
      <Container>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>
          {"<"}
        </Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>
          {">"}
        </Arrow>
      </Container>
    );
    const Carousel = makeCarousel(CarouselUI);
    return (
      <Carousel>
        {/* <Slide right>
                    <div className="caro">
                        <h1>Slide 1</h1>
                        <p>Slide Description</p>
                    </div>
                </Slide>
                <Slide right>
                    <div className="caro">
                        <h1>Slide 2</h1>
                        <p>Slide Description</p>
                    </div>
                </Slide>
                <Slide right>
                    <div className="caro">
                        <h1>Slide 3</h1>
                        <p>Slide Description</p>
                    </div>
                </Slide> */}

        {this.state.carouselinas.map((carolina, index) => {
          return (
            <Slide right key={index}>
              <div
                className="caro"
                style={{ backgroundImage: `url(${carolina.img})` }}
              >
                <div className="coloroverlay white-text center">
                  {/* <h1>{carolina.title}</h1>
                  <p>Slide Description</p> */}
                  {/* <h1 className="we">Nosotros</h1> */}
                  <h1 className="we">{localStorage.getItem('we')}</h1>
                  <Bounce bottom>
                    <h4 className="businessdesc">
                    {localStorage.getItem('ctadesc')}
                    </h4>
                  </Bounce>
                  <Link to="/about">
                    <button className="btn waves-effect waves-light btnlearnmore">
                    {localStorage.getItem('learnmore')}
                    </button>
                  </Link>
                </div>
              </div>
            </Slide>
          );
        })}
      </Carousel>
    );
  }
}

export default Carousel;
