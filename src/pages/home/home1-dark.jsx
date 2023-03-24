import React from "react";
import AboutUs1 from "../../components/About-us1";
import BlogsTwoColumnSlider from "../../components/Blogs-two-column-slider";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import IntroWithSlider1 from "../../components/Intro-with-slider1";
import Navbar from "../../components/Navbar";
import Numbers1 from "../../components/Numbers";
import Services1 from "../../components/Services1";
import SkillsCircle from "../../components/Skills-circle";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import Works1Slider from "../../components/Works3-slider";
import DarkTheme from "../../layouts/Dark";
import Head from "next/head";
const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
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
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Head>
          {/* <!-- ========== Page Title ========== --> */}
                {/* <!-- Primary Meta Tags --> */}
          <title>Dimaforus - Graphic Design</title>
          <meta name="title" content="Graphic Design"/>
          <meta name="description" content="We approach every design challenge with a sense of wonder and curiosity, always seeking out new and innovative ways to tell your story."/>
                {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:title" content="Graphic Design"/>
          <meta property="og:url" content="https://dimaforus.com/" />
          <meta property="og:description" content="We approach every design challenge with a sense of wonder and curiosity, always seeking out new and innovative ways to tell your story."/>
                {/* <!-- Twitter --> */}
          <meta property="twitter:title" content="Graphic Design"/>
          <meta property="twitter:url" content="https://dimaforus.com/" />
          <meta property="twitter:description" content="We approach every design challenge with a sense of wonder and curiosity, always seeking out new and innovative ways to tell your story."/>
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider1 sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs1 />
        <Services1 />
        <Works1Slider />
        <Clients1 theme="dark" />
        <CallToAction subBG />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage1;
