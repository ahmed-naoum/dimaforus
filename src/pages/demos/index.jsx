import React from "react";
import AboutUs2 from "../../components/About-us2";
import BlogsThreeColumn1 from "../../components/Blogs-three-column1";
import Footer from "../../components/Footer";
import IntroWithSlider3 from "../../components/Intro-with-slider3";
import Navbar from "../../components/Navbar";
import NumbersWithVideo from "../../components/Numbers-with-video";
import Services3 from "../../components/Services3";
import Testimonials1 from "../../components/Testimonials1";
import Works2Slider from "../../components/Works2-slider";
import DarkTheme from "../../layouts/Dark";

import Head from "next/head";
const Homepage3 = () => {
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
      <title>Dimaforus - Digital Marketing Agency</title>
      <meta name="title" content="Dimaforus"/>
      <meta name="description" content="Welcome to DIMAFORUS, a leading digital marketing agency that helps businesses of all sizes to grow and succeed online."/>
      <meta name="copyright" content="Dimaforus"/>
            {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:site_name" content="Dimaforus"/>
      <meta property="og:title" content="Dimaforus"/>
      <meta property="og:description" content="Welcome to DIMAFORUS, a leading digital marketing agency that helps businesses of all sizes to grow and succeed online."/>
            {/* <!-- Twitter --> */}
      <meta property="twitter:title" content="Dimaforus"/>
      <meta property="twitter:descriptin" content="Welcome to DIMAFORUS, a leading digital marketing agency that helps businesses of all sizes to grow and succeed online."/>
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider3 /> 
      <AboutUs2 skillsTheme="dark" />
      <Services3 />
      <NumbersWithVideo />
      <Works2Slider subBG />
      <BlogsThreeColumn1  />
      <Footer />
    </DarkTheme>
  );
};
  
export default Homepage3;
