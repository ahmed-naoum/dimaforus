/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";
import Link from "next/link";

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className={`footer-half ${noSubBG ? '':'sub-bg'} section-padding pb-0`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                <li>
                  <span>Email : </span>  <a>Contact@Dimaforus.com</a>
                  </li>
                  
                  <li>
                    <span>Address : </span> Dimaforus - Digital Marketing Agency, Agadir Drarga
                  </li>
                  <li>
                    <span>Phone : </span> (+212) 611 53 57 58
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="instagram.com/dimaforus/" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newslatter</h6>
              <p>Sign up for subscribe out newsletter!</p>
              <Formik
                initialValues={{
                  subscribe: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">Subscribe</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="insta">
              <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">
                <a href="https://instagram.com/p/CpEogf8D4cr/">
                  <img src="/img/insta/1.jpg" alt="" />
                </a>
                <a href="https://instagram.com/p/CpEn-BJjdXi/">
                  <img src="/img/insta/2.jpg" alt="" />
                </a>
                <a href="https://instagram.com/dimaforus/">
                  <img src="/img/insta/3.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © 2023 Made with passion by  - 
            <Link href="dimaforus.com"><a className="curve">
              &nbsp;Dimaforus
              </a>
            </Link>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
