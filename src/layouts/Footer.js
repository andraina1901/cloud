import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-wrapper-one dark-black pt-90">
        <div className="footer-widget pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="widget about-widget mb-40 wow fadeInUp"
                  data-wow-delay="10ms"
                >
                  <h4 className="widget-title">Mobile Experience</h4>
                  <ul className="button">
                    <li>
                      <a href="#" className="app-btn android-btn">
                        <div className="icon">
                          <i className="ti-android"></i>
                        </div>
                        <div className="info">
                          <span>get it on</span>
                          <h6>Goole Play</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="app-btn apple-btn">
                        <div className="icon">
                          <i className="ti-apple"></i>
                        </div>
                        <div className="info">
                          <span>get it on</span>
                          <h6>App Store</h6>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="footer-social">
                    <h4>Follow Us</h4>
                    <ul className="social-link">
                      <li>
                        <a href="#">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget recent-post-widget mb-40 wow fadeInUp"
                  data-wow-delay="20ms"
                >
                  <h4 className="widget-title">Equipes</h4>
                  <ul className="post-widget-list">
                    <li className="post-content-item">
                      <div className="post-title-date">
                        <span >
                          <a href="#">ETU1804</a>
                        </span>
                        <h6 className="title">                          
                            <a>RAFANOMEZANTSOA Jeremia</a>
                        </h6>
                      </div>
                    </li>
                    <li className="post-content-item">
                      <div className="post-title-date">
                        <span >
                          <a href="#">ETU1828</a>
                        </span>
                        <h6 className="title">                          
                            <a>RAKOTOMANARIVOASINA Tommy </a>
                        </h6>
                      </div>
                    </li>
                    <li className="post-content-item">
                      <div className="post-title-date">
                        <span >
                          <a href="#">ETU1872</a>
                        </span>
                        <h6 className="title">                          
                            <a>RANDRIANTAHIANA Tohiniaina </a>
                        </h6>
                      </div>
                    </li>
                    <li className="post-content-item">
                      <div className="post-title-date">
                        <span >
                          <a href="#">ETU1901</a>
                        </span>
                        <h6 className="title">                          
                            <a>RAZAFINANJA Andraina Liantsoa</a>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div
                  className="widget categories-widget mb-40 wow fadeInUp"
                  data-wow-delay="30ms"
                >
                  <h4 className="widget-title">Categories</h4>
                  <ul className="categories-link">
                    <li>
                      <a href="#">Citadine</a>
                    </li>
                    <li>
                      <a href="#">Berline</a>
                    </li>
                    <li>
                      <a href="#">Crossover</a>
                    </li>
                    <li>
                      <a href="#">Break</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="widget newsletter-widget mb-40 wow fadeInUp"
                  data-wow-delay="40ms"
                >
                  <h4 className="widget-title">Votre feedback</h4>
                  <p>
                    Ecrivez-nous ce que vous pensez de notre site.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Enter Email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form_group">
                      <button className="main-btn">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2024. All rights reserved to{" "}
                    <span>Okaz</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;