import React from "react";
import "./accordion.css";

import foto from "../../images/banner.png";

window.onload = () => {
  const accordionList = document.getElementsByTagName("dt");
  const accordionListDd = document.querySelectorAll(".item-accordion");
  var i;

  for (i = 0; i < accordionList.length; i++) {
    accordionList[i].addEventListener("click", activeAccordion);
  }

  function activeAccordion() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accordionListDd.length; i++) {
      accordionListDd[i].className = "item-accordion close";
    }
    if (itemClass == "item-accordion close") {
      this.parentNode.className = "item-accordion open";
    }
  }
};

function Accordion() {
  return (
    <div>
      <section className="quarta-sessao">
        <div className="centro">
          <dl className="faq-lista js-accordion">
            <div className="item-accordion open">
              <dt>Lorem ipsum</dt>
              <dd>
                <img src={foto} alt="banner" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </dd>
            </div>
            <div className="item-accordion close">
              <dt>Lorem ipsum</dt>
              <dd>
                <img src={foto} alt="banner" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </dd>
            </div>
            <div className="item-accordion close">
              <dt>Lorem ipsum</dt>
              <dd>
                <img src={foto} alt="banner" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}

export default Accordion;
