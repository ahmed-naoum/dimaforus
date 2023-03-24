/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AboutUs2 = ({ skillsTheme }) => {
  const cpStyle = {
    path: {
      stroke: "#75dab4",
    },
    trail: {
      stroke: skillsTheme
        ? skillsTheme == "dark"
          ? "#0f1218"
          : "#e5e5e5"
        : "",
    },
    text: {
      fill: skillsTheme ? (skillsTheme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-title">
                <h6>About Us</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                  We young and hungry for knowlege and learning:
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                 We are Dimaforus. We create amazing websites,
                  remarkable brands and cutting-edge apps,
                   we are a team of young software engineers
                    that have the power to bring any vision to reality.
              </p>
              <p className="mt-10 wow fadeInUp" data-wow-delay=".4s">
              All we need from you to imagine and let us do the rest.
              </p>
              <Split>
                <Link href="/about/about-dark">
                  <a
                    className="words chars splitting simple-btn custom-font mt-30 wow"
                    data-splitting
                  >
                    <span>Know More</span>
                  </a>
                </Link>
              </Split>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/slid/1.png" alt="" />
              </div>
              <div className="skills-circle wow fadeInUp" data-wow-delay=".8">
                <div className="item">
                  <div className="skill">
                    <CircularProgressbar
                      value={75}
                      className="custom-font"
                      strokeWidth={2}
                      text={`${75}%`}
                      styles={cpStyle}
                    />
                  </div>
                  <div className="cont">
                    <span>Project</span>
                    <h6>Consulting</h6>
                  </div>
                </div>
                <div className="item">
                  <div className="skill">
                    <CircularProgressbar
                      value={90}
                      strokeWidth={2}
                      className="custom-font"
                      text={`${90}%`}
                      styles={cpStyle}
                    />
                  </div>
                  <div className="cont">
                    <span>Product</span>
                    <h6>Development</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
