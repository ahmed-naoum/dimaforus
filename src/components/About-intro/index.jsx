import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding ">
      <div className="container">
        <div className="d-flex align-items-center flex-column">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8  col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                we are  an essential partner for any business or organization looking to enhance its brand, reach a wider audience, and achieve its marketing and advertising goals. By leveraging the expertise of a creative agency, businesses can stay ahead of the curve, differentiate themselves from the competition, and communicate their message effectively to their target audience.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
