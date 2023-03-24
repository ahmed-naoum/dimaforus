import React from "react";
import Link from "next/link";

const Services3 = () => {
  return (
    <section className="services section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font tr-head">
          <h6>Best Features</h6>
          <h3>Services.</h3>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop">
              <span className="icon pe-7s-gleam"></span>
              <h6>Digital Marketing</h6>
              <p>
              people will never buy product unless it has a story or something they can get value from, Our marketing is telling stories.

              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-phone"></span>
              <h6>Web &amp; App Development</h6>
              <p>
              Most people think that an app is just a simple interface that they click on, I&apos;m 100% sure we will change your mind.
              </p>
            </div>  
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-magic-wand"></span>
              <h6>Graphic Design</h6>
              <p>
              Our creative team is super 3d talented we don&apos;t know Impossible, we can even make rockets appear if you choose, we simply have the know how.
              </p>
            </div>
          </div>
        </div>
        <div className="smore custom-font">
          <Link href="/about/about-dark">Discover More</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Services3;
