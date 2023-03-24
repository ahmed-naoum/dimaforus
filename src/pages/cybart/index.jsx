import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import ProjectDetailsVideo from "../../components/Project-details-video";
import Image from 'next/image'
import SmallFooter from "../../components/Small-footer";
import Link from "next/link";
const ProjectDetailsDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <section className="page-header proj-det">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                <h6>art &amp; illustration</h6>
                <h2>WAXSQUAD.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>01 </span> Introduction
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p className="extra-text">
                We are a Creative Agency &amp; Startup Studio that provides
                Digital Products and Services turns to focus on client success.
                We specialize in user interface design, including front-end
                development which we consider to be an integral part.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <a href="https://dimaforus.com">dimaforus.com</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>6 Mars 2023</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                <Link href="/works/works-dark">Logo Design </Link> ,
                <Link href="/works/works-dark">art</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                <Link href="/works/works-dark">Minimal</Link> ,
                <Link href="/works/works-dark">Modern</Link> ,
                <Link href="/works/works-dark">Design</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="projdtal">
      <h2 style={{ display: "none" }}> &nbsp; </h2>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            <div className="col-md-6 pr-0">
              <a href="../../img/portfolio/project1/1.jpg">
              <Image src="/img/portfolio/project1/1.jpg" alt="Landscape picture"/>
              </a>
            </div>
            <div className="col-md-6">
              <a href="../../img/portfolio/project1/2.jpg">
                <Image alt="" src="/img/portfolio/project1/2.jpg" />
              </a>
            </div>
            <div className="col-md-2 pr-0">
              <a href="../../img/portfolio/project1/3.jpg">
                <Image alt="" src="/img/portfolio/project1/3.jpg" />
              </a>
            </div>
            <div className="col-md-5 pr-0">
              <a href="../../img/portfolio/project1/4.jpg">
                <Image alt="" src="/img/portfolio/project1/4.jpg" />
              </a>
            </div>
            <div className="col-md-5 ">
              <a href="../../img/portfolio/project1/5.jpg">
                <Image alt="" src="/img/portfolio/project1/5.jpg" />
              </a>
            </div>
            <div className="col-md-6 pr-0">
              <a href="../../img/portfolio/project1/6.jpg">
                <Image alt="" src="/img/portfolio/project1/6.jpg" />
              </a>
            </div>
            <div className="col-md-6">
              <a href="../../img/portfolio/project1/7.jpg">
                <Image alt="" src="/img/portfolio/project1/7.jpg" />
              </a>
            </div>
            <div className="col-md-6 pr-0">
              <a href="../../img/portfolio/project1/8.jpg">
                <Image alt="" src="/img/portfolio/project1/8.jpg" />
              </a>
            </div>
            <div className="col-md-6">
              <a href="../../img/portfolio/project1/9.jpg">
                <Image alt="" src="/img/portfolio/project1/9.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
      <ProjectDetailsVideo
        videoBackground="/img/portfolio/project1/Capture.PNG"
        videoType="vimeo"
        videoId={810514219}
      />
      <SmallFooter />
    </DarkTheme>
  );
};

export default ProjectDetailsDark;
