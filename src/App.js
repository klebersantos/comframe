import React from "react";
import Header from "./components/header/header";
import Carousel from "./components/carousel/carousel";
import About from "./components/about/about";
import Accordion from "./components/accordion/accordion";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <About></About>
      <Accordion></Accordion>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
