import React from "react";
import BlogDetails from "../../components/Blog-details";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import Link from "next/link";

const BlogDetailsDark = () => {
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
      <section className="page-header blg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="cont text-center">
                <h2>The Importance of Brand Identity</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/blog/single.jpg" alt="" />
              </div>
              <div className="content pt-20">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <div className="spacial">
                        <p>
                        A creative agency could explore the different elements that make up a brand identity, such as logos, colors, and typography, and explain why it&apos;s essential for businesses to establish a cohesive and memorable brand identity.

                        </p>
                      </div>
                      {/* <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment for self esteem is that it
                        needs be nurturing. The main component of a healthy env
                        for self esteem The main compont be nurturing It should
                        provide unconditional warmth. The main component of a
                        healthy env for self esteem The main compont be
                        nurturing It should provide unconditional
                      </p>

                      <h6>- We all intend to plan ahead.</h6>

                      <p>
                        We all intend to plan ahead, but too often let the
                        day-to-day minutia get in the way of making a calendar
                        for the year. Sure, you can’t know every detail to
                        anticipate. Heck, you can’t know half the priorities
                        that will pop up in any particular month. But you can
                        plan for big picture seasonality, busy-times, and
                        events.
                      </p>

                      <ul>
                        <li>
                          <span>01</span> Integer in volutpat libero.
                        </li>
                        <li>
                          <span>02</span> Vivamus maximus ultricies pulvinar.
                        </li>
                        <li>
                          <span>03</span> priorities that will pop up in any
                          particular month.
                        </li>
                        <li>
                          <span>04</span> We all intend to plan ahead.
                        </li>
                        <li>
                          <span>05</span> The main component of a healthy env
                          for self esteem.
                        </li>
                      </ul>

                      <div className="quotes text-center">
                        <p>
                          Never ever think of giving up. Winners never quit and
                          quitters never win. Take all negative words out of
                          your mental dictionary and focus on the solutions with
                          utmost conviction and patience. The battle is never
                          lost until you’ve abandon your vision.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/single.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/single.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <p>
                        We all intend to plan ahead, but too often let the
                        day-to-day minutia get in the way of making a calendar
                        for the year. Sure, you can’t know every detail to
                        anticipate. Heck, you can’t know half the priorities
                        that will pop up in any particular month. But you can
                        plan for big picture seasonality, busy-times, and
                        events.
                      </p> */}
                      <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                        <div className="tags">
                          <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                          <a href="#0">ThemesCamp</a>
                        </div>
                      </div>
                    </div>
                    <div className="author">
                      <div className="author-img">
                        <img src="/img/blog/01.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <span>author :</span> Jorden Griffin
                        </h6>
                        <p>
                          the main component of a healthy environment for self
                          esteem is that it needs be nurturing. The main compont
                          of a healthy environment.
                        </p>
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <span>
                  <a href="#0">Prev Post</a>
                </span>
                <span className="icon">
                  <Link href="/blog/blog-dark">
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <a href="#0">Next Post</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </DarkTheme>
  );
};

export default BlogDetailsDark;
