import React from "react";
import "./header.css";
import Slideshow from "./slider";

import seta from "../../images/seta_baixo.png";

function Header() {
  return (
    <div className="HeaderSection">
      <header>
        <h1>LOREM IPSUM</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <a href="#segunda-sessao" className="seta_baixo">
          <img src={seta} />
        </a>
      </header>
      <Slideshow></Slideshow>
    </div>
  );
}

export default Header;
