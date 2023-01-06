import React from "react";
import "./ImgCarouselStyles.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import balea from "../../assets/balea-lake.jpg";
import bigar from "../../assets/bigar-waterfall.jpg";
import bran from "../../assets/bran-castle.jpeg";
import Citadel from "../../assets/Citadel-Rasnov-Romania.jpg";
import peles from "../../assets/peles-castle.jpg";
import poenari from "../../assets/poenari-castle.jpg";
import sibiu from "../../assets/sibiu.jpg";
import sighisoara from "../../assets/sighisoara.jpg";
import transfagarasan from "../../assets/transfagarasan-highway.jpg";
import voronet from "../../assets/voronet-monastery.jpg";
import timisoara from "../../assets/timisoara.jpg";

function ImgCarousel() {
  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={balea} alt="/" />
        </div>
        <div>
          <img src={bigar} alt="/" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={bran} alt="/" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={Citadel} alt="/" />
          {/* <p className="legend">Maldives 1</p> */}
        </div>

        <div>
          <img src={peles} alt="/" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={poenari} alt="/" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={sibiu} alt="/" />
          {/* <p className="legend">Maldives 1</p> */}
        </div>
        <div>
          <img src={sighisoara} alt="/" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={timisoara} alt="/" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={transfagarasan} alt="/" />
          {/* <p className="legend">Maldives 1</p> */}
        </div>
        <div>
          <img src={voronet} alt="/" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
