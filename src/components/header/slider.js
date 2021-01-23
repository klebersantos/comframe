import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../../images/banner.png";
import img2 from "../../images/banner2.jpg";

const properties = {
  autoplay: true,
  arrows: false,
  canSwipe: true,
  indicators: true,
};

const Slideshow = () => {
  return (
    <div>
      <div className="slide-container">
        <Fade {...properties}>
          <div className="each-fade">
            <div>
              <img src={img1} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src={img2} />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Slideshow;
