import React from "react";
import BlcSec from "../../components/Blc-sec";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import IntroWithSlider2 from "../../components/Intro-with-slider2";
import Navbar from "../../components/Navbar";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
import Services2 from "../../components/Services2";
import SkillsCircle from "../../components/Skills-circle";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";
import Head from "next/head";

const Homepage2 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
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
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Head>
        {/* <!-- ========== Page Title ========== --> */}
              {/* <!-- Primary Meta Tags --> */}
        <title>Dimaforus - Web & App Development</title>
        <meta name="title" content="Web & App Development"/>
        <meta name="description" content="We approach every design challenge with a sense of wonder and curiosity, always seeking out new and innovative ways to tell your story."/>
              {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:title" content="Web & App Development"/>
        <meta property="og:url" content="https://dimaforus.com/Development" />
        <meta property="og:description" content="We approach every design challenge with a sense of wonder and curiosity, always seeking out new and innovative ways to tell your story."/>
              {/* <!-- Twitter --> */}
        <meta property="twitter:title" content="Web & App Development"/>
        <meta property="twitter:url" content="https://dimaforus.com/Development" />
        <meta property="twitter:description" content="We approach every design challenge with a sense of wonder and curiosity, always seeking out new and innovative ways to tell your story."/>
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider2 />
      <BlcSec />
      <Services2 />

      <PortfolioCustomColumn column={3} filterPosition="center" />
      <Clients1 theme="dark" subBG />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage2;
