import React from "react";
import Link from "next/link";
import Split from '../Split';

const BlogsThreeColumn1 = ({ subBG, newHome }) => {
  return (
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Latest News
          </h6>
          <Split>
            <h3 className="wow" data-splitting>
              Our Blogs.
            </h3>
          </Split>
          
           
          
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div
              className={`item bg-img ${newHome ? 'active' : ''}`}
              style= {{ backgroundImage: "url(/img/blog/3.jpg)" ,backgroundPositionX: "50%",height: "100%"}}
            >
              <div className="cont">
                <Link href="/blog/Storytelling-in-Marketing">
                  <a className="date custom-font">
                    <span>
                      <i>06</i> Aug 2022
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/Storytelling-in-Marketing">
                  
The Power of Storytelling in Marketing                 </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/Storytelling-in-Marketing">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div
              className="item active bg-img"
              style={{ backgroundImage: "url(/img/blog/2.jpg)" ,backgroundPositionX: "50%",height: "100%"}}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date custom-font">
                    <span>
                      <i>11</i> Aug 2022
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/The-Importance-of-Brand-Identity">
                  The Importance of Brand Identity
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/The-Importance-of-Brand-Identity">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div
              className={`item bg-img ${newHome ? 'active' : ''}`}
              style={{ backgroundImage: "url(/img/blog/1.png)" ,backgroundPositionX: "50%",height: "100%"}}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date custom-font">
                    <span>
                      <i>09</i> Aug 2022
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>WordPress</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/The-Latest-Design-Trends">
                  The Latest Design Trends
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/The-Latest-Design-Trends">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsThreeColumn1;
