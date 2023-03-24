/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogStanderd = () => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              <div className="item mb-80">
                <div className="img">
                  <Link href="/blog-details/The-Latest-Design-Trends">
                    <a>
                      <Image src="/img/blog/b1.jpg" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <div className="row">
                    <div className="col-10">
                      <a href="#0" className="date">
                        <span className="num">07 /</span>
                        <span>August</span>
                      </a>
                      <div className="tags">
                        <a href="#0">Trends</a>
                        <a href="#0">Design</a>
                        <a href="#0">Dimaforus</a>
                      </div>
                      <h4 className="title">
                        <Link href="/blog-details/The-Latest-Design-Trends">
                          <a>The Latest Design Trends</a>
                        </Link>
                      </h4>
                      <p>
                      Design trends are constantly evolving, and staying on top of the latest developments is crucial for any creative agency. A blog post or article discussing the latest design trends in web design, graphic design, or UI/UX design could be both informative and inspiring for readers.

                      </p>
                      <Link href="/blog-details/The-Latest-Design-Trends">
                        <a className="simple-btn mt-30">Read More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-80">
                <div className="img">
                  <Link href="/blog-details/The-Importance-of-Brand-Identity">
                    <a>
                      <Image src="/img/blog/b2.jpg" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <div className="row">
                    <div className="col-10">
                      <a href="#0" className="date">
                        <span className="num">07</span>
                        <span>August</span>
                      </a>
                      <div className="tags">
                        <a href="#0">Trends</a>
                        <a href="#0">Design</a>
                        <a href="#0">Dimaforus</a>
                      </div>
                      <h4 className="title">
                        <Link href="/blog-details/The-Importance-of-Brand-Identity">
                          <a>The Importance of Brand Identity</a>
                        </Link>
                      </h4>
                      <p>
                      A creative agency could explore the different elements that make up a brand identity, such as logos, colors, and typography, and explain why it&apos;s essential for businesses to establish a cohesive and memorable brand identity.

                      </p>
                      <Link href="/blog-details/The-Importance-of-Brand-Identity">
                        <a className="simple-btn mt-30">Read More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-80">
                <div className="img">
                  <Link href="/blog-details/Storytelling-in-Marketing">
                    <a>
                      <Image src="/img/blog/b3.jpg" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <div className="row">
                    <div className="col-10">
                      <a href="#0" className="date">
                        <span className="num">07</span>
                        <span>August</span>
                      </a>
                      <div className="tags">
                        <a href="#0">WordPress</a>
                        <a href="#0">Themeforest</a>
                        <a href="#0">Avo</a>
                      </div>
                      <h4 className="title">
                        <Link href="/blog-details/Storytelling-in-Marketing">
                          <a>The Power of Storytelling in Marketing</a>
                        </Link>
                      </h4>
                      <p>
                      Storytelling is a powerful tool that can be used to engage and connect with customers. A creative agency could discuss the different ways in which storytelling can be incorporated into marketing campaigns, from creating compelling ad copy to producing videos that tell a brand&apos;s story.
                      </p>
                      <Link href="/blog-details/Storytelling-in-Marketing">
                        <a className="simple-btn mt-30">Read More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="item">
                <div className="img">
                  <Link href="/blog-details/blog-details-dark">
                    <a>
                      <Image src="/img/blog/b4.jpg" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <div className="row">
                    <div className="col-10">
                      <a href="#0" className="date">
                        <span className="num">07</span>
                        <span>August</span>
                      </a>
                      <div className="tags">
                        <a href="#0">WordPress</a>
                        <a href="#0">Themeforest</a>
                        <a href="#0">Avo</a>
                      </div>
                      <h4 className="title">
                        <Link href="/blog-details/blog-details-dark">
                          <a>Build a Beautiful Blog With Ease</a>
                        </Link>
                      </h4>
                      <p>
                        My job is simple and sophisticated, so it is possible to
                        describe and simple, and flowery language. I love the
                        feel and sophistication of its superiority. I like
                        people with a keen mind and at the same time easy to
                        talk to. These qualities can be combined perfectly
                        natural. However, things like people look miserable, if
                        these properties are connected.
                      </p>
                      <Link href="/blog-details/blog-details-dark">
                        <a className="simple-btn mt-30">Read More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="pagination">
                <span className="active">
                  <a href="#0">1</a>
                </span>
                {/* <span>
                  <a href="#0">2</a>
                </span> */}
                {/* <span>
                  <a href="#0">
                    <i className="fas fa-angle-right"></i>
                  </a>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
