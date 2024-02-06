import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import TestimoinalSlider from "../src/components/Slider/TestimonialSlider";
import Layout from "../src/layouts/Layout";
import {
  PlaceSliderOne,
  ClientSliderOne,
  ListingSliderOne
} from "../src/sliderProps";


const Index2 = () => {
  return (
    <Layout header={2}>
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div
          className="hero-wrapper-two bg_cover"
          style={{ backgroundImage: "url(assets/images/hero/hero-bg-2.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay="30ms">
                    Experience The Wonder
                  </h1>
                  <h3 className="wow fadeInDown" data-wow-delay="50ms">
                    People Don’t Take,Trips Take People
                  </h3>
                  <div
                    className="hero-search-wrapper wow fadeInUp"
                    data-wow-delay="70ms"
                  >
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form_group">
                            <input
                              type="search"
                              className="form_control"
                              placeholder="Search By Category"
                              name="search"
                              required=""
                            />
                            <i className="ti-ink-pen" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="form_group">
                            <select className="wide">
                              <option value="01">Museums</option>
                              <option value="02">Restaurant</option>
                              <option value="03">Party Center</option>
                              <option value="04">Fitness Zone</option>
                              <option value="05">Game Field</option>
                              <option value="06">Job &amp; Feeds</option>
                              <option value="07">Shooping</option>
                              <option value="08">Art Gallery</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="form_group">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Location"
                              name="location"
                              required=""
                            />
                            <i className="ti-location-pin" />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                          <div className="form_group">
                            <button className="main-btn icon-btn">
                              Search Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <p className="tags">
                    <span>Popular:</span>
                    <a href="#">Saloon</a>,<a href="#">Restaurant</a>,
                    <a href="#">Game</a>,<a href="#">Counter</a>,
                    <a href="#">Train Station</a>,<a href="#">Parking</a>,
                    <a href="#">Shooping</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/* <!--====== Start Category Section ======--> */}
      <section className="category-area">
        <div className="container">
          <div className="category-wrapper-one wow fadeInDown">
            <div className="row no-gutters">
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <i className="flaticon-government"></i>
                    </div>
                    <h6>Museums</h6>
                  </div>
                  <Link href="/">
                    <a className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <i className="flaticon-serving-dish"></i>
                    </div>
                    <h6>Restaurant</h6>
                  </div>
                  <Link href="/">
                    <a className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <i className="flaticon-game-controller"></i>
                    </div>
                    <h6>Game Field</h6>
                  </div>
                  <Link href="/">
                    <a className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <i className="flaticon-suitcase"></i>
                    </div>
                    <h6>Job & Feed</h6>
                  </div>
                  <Link href="/">
                    <a className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <i className="flaticon-gift-box"></i>
                    </div>
                    <h6>Party Center</h6>
                  </div>
                  <Link href="/">
                    <a className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 category-column">
                <div className="category-item category-item-one">
                  <div className="info text-center">
                    <div className="icon">
                      <i className="flaticon-dumbbell"></i>
                    </div>
                    <h6>Fitness Zone</h6>
                  </div>
                  <Link href="/">
                    <a className="category-btn">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Start Listing Section ======--> */}
      <section className="listing-grid-area pt-115 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <span className="sub-title">Featured List</span>
                <h2>Explore Destination</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                dta-wow-delay="10ms"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-1.jpg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-chef"></i>
                      </div>
                      <div className="title">
                        <h6>Restaurant</h6>
                      </div>
                    </div>
                    <span className="status st-open">Open</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Food Corner</a>
                    </Link>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$05.00 - $80.00</span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin"></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                dta-wow-delay="20ms"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-2.jpg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-government"></i>
                      </div>
                      <div className="title">
                        <h6>Museums</h6>
                      </div>
                    </div>
                    <span className="status st-open">Open</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Central History</a>
                    </Link>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$05.00 - $80.00</span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin"></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                dta-wow-delay="30ms"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-3.jpg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Fitness</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-dumbbell"></i>
                      </div>
                      <div className="title">
                        <h6>Fitness</h6>
                      </div>
                    </div>
                    <span className="status st-close">Close</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Xtream Gym</a>
                    </Link>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$05.00 - $80.00</span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin"></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                dta-wow-delay="40ms"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-4.jpg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-suitcase"></i>
                      </div>
                      <div className="title">
                        <h6>Job & Feed</h6>
                      </div>
                    </div>
                    <span className="status st-open">Open</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Mega Agency</a>
                    </Link>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$05.00 - $80.00</span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin"></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                dta-wow-delay="50ms"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-5.jpg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-shopping"></i>
                      </div>
                      <div className="title">
                        <h6>Central Plaza</h6>
                      </div>
                    </div>
                    <span className="status st-close">Close</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Central Plaza</a>
                    </Link>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$05.00 - $80.00</span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin"></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-one mb-45 wow fadeInUp"
                dta-wow-delay="60ms"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-6.jpg"
                    alt="Listing Image"
                  />
                  <span className="featured-btn">Featured</span>
                  <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                    <div className="meta-icon-title d-flex align-items-center">
                      <div className="icon">
                        <i className="flaticon-color-palette"></i>
                      </div>
                      <div className="title">
                        <h6>Art Gallery</h6>
                      </div>
                    </div>
                    <span className="status st-open">Open</span>
                  </div>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">National Art</Link>
                  </h3>
                  <div className="ratings">
                    <ul className="ratings ratings-three">
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li className="star">
                        <i className="flaticon-star-1"></i>
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$05.00 - $80.00</span>
                  <span className="phone-meta">
                    <i className="ti-tablet"></i>
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  </span>
                  <div className="listing-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-location-pin"></i>California, USA
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-heart"></i>
                          <a href="#">Save</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Listing Section ======--> */}
      
      {/*====== Start Testimonial Section ======*/}
      <section
        className="testimonial-area bg_cover pt-110 pb-140"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-two section-title-white text-center mb-55 wow fadeInUp">
                <h2>
                  <span className="line">Customer</span> Feedack
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="testimonial-wrapper-one text-center wow fadeInUp">
                <div className="testimonial-review-area">
                  <TestimoinalSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/* <!--====== Start Popular Listing Section ======--> */}
      <section className="listing-grid-area pt-75 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Featured List</span>
                <h2>Explore Destination</h2>
              </div>
            </div>
          </div>
          <Slider
            {...ListingSliderOne}
            className="listing-slider-one wow fadeInDown"
          >
            <div className="listing-item listing-grid-item-two">
              <div className="listing-thumbnail">
                <img
                  src="assets/images/listing/listing-grid-7.jpg"
                  alt="Listing Image"
                />
                <a href="#" className="cat-btn">
                  <i className="flaticon-chef"></i>
                </a>
                <span className="featured-btn">Featured</span>
                <ul className="ratings ratings-four">
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <span>
                      <a href="#">(02 Reviews)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="listing-content">
                <h3 className="title">
                  <Link href="/listing-details-1">
                    <a>Pizza Recipe</a>
                  </Link>
                </h3>
                <p>Popular restaurant in california</p>
                <span className="phone-meta">
                  <i className="ti-tablet"></i>
                  <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  <span className="status st-open">Open</span>
                </span>
                <div className="listing-meta">
                  <ul>
                    <li>
                      <span>
                        <i className="ti-location-pin"></i>California, USA
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="ti-heart"></i>
                        <a href="#">Save</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="listing-item listing-grid-item-two">
              <div className="listing-thumbnail">
                <img
                  src="assets/images/listing/listing-grid-8.jpg"
                  alt="Listing Image"
                />
                <a href="#" className="cat-btn">
                  <i className="flaticon-dumbbell"></i>
                </a>
                <ul className="ratings ratings-three">
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <span>
                      <a href="#">(02 Reviews)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="listing-content">
                <h3 className="title">
                  <Link href="/listing-details-1">Gym Ground</Link>
                </h3>
                <p>Popular restaurant in california</p>
                <span className="phone-meta">
                  <i className="ti-tablet"></i>
                  <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  <span className="status st-close">close</span>
                </span>
                <div className="listing-meta">
                  <ul>
                    <li>
                      <span>
                        <i className="ti-location-pin"></i>California, USA
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="ti-heart"></i>
                        <a href="#">Save</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="listing-item listing-grid-item-two">
              <div className="listing-thumbnail">
                <img
                  src="assets/images/listing/listing-grid-9.jpg"
                  alt="Listing Image"
                />
                <a href="#" className="cat-btn">
                  <i className="flaticon-government"></i>
                </a>
                <span className="featured-btn">Featured</span>
                <ul className="ratings ratings-five">
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <span>
                      <a href="#">(02 Reviews)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="listing-content">
                <h3 className="title">
                  <Link href="/listing-details-1">City Palace</Link>
                </h3>
                <p>Popular restaurant in california</p>
                <span className="phone-meta">
                  <i className="ti-tablet"></i>
                  <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  <span className="status st-open">Open</span>
                </span>
                <div className="listing-meta">
                  <ul>
                    <li>
                      <span>
                        <i className="ti-location-pin"></i>California, USA
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="ti-heart"></i>
                        <a href="#">Save</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="listing-item listing-grid-item-two">
              <div className="listing-thumbnail">
                <img
                  src="assets/images/listing/listing-grid-1.jpg"
                  alt="Listing Image"
                />
                <a href="#" className="cat-btn">
                  <i className="flaticon-chef"></i>
                </a>
                <span className="featured-btn">Featured</span>
                <ul className="ratings ratings-two">
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li className="star">
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <span>
                      <a href="#">(02 Reviews)</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="listing-content">
                <h3 className="title">
                  <Link href="/listing-details-1">
                    <a>Pizza Recipe</a>
                  </Link>
                </h3>
                <p>Popular restaurant in california</p>
                <span className="phone-meta">
                  <i className="ti-tablet"></i>
                  <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                  <span className="status st-open">Open</span>
                </span>
                <div className="listing-meta">
                  <ul>
                    <li>
                      <span>
                        <i className="ti-location-pin"></i>California, USA
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="ti-heart"></i>
                        <a href="#">Save</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* <!--====== End Popular Listing Section ======--> */}
      {/* <!--====== Start Client Section ======--> */}
      <section className="client-area ">
        <div className="client-wrapper-one pb-120">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Featured List</span>
                <h2>Explore Destination</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <Slider
              {...ClientSliderOne}
              className="client-slider-one wow fadeInDown"
            >
              <div className="client-item">
                <div className="client-img">
                  <a href="#">
                    <img src="assets/images/client/01.png" alt="Client Image" />
                  </a>
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <a href="#">
                    <img src="assets/images/client/02.png" alt="Client Image" />
                  </a>
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <a href="#">
                    <img src="assets/images/client/03.png" alt="Client Image" />
                  </a>
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <a href="#">
                    <img src="assets/images/client/04.png" alt="Client Image" />
                  </a>
                </div>
              </div>
              <div className="client-item">
                <div className="client-img">
                  <a href="#">
                    <img src="assets/images/client/02.png" alt="Client Image" />
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* <!--====== End Client Section ======--> */}
      {/* <!--====== Start Place Section ======--> */}
      <section className="place-area pt-115 pb-110">
        <div className="container-fluid place-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Feature Places</span>
                <h2>Explore By Destination</h2>
              </div>
            </div>
          </div>
          <Slider
            {...PlaceSliderOne}
            className="place-slider-one wow fadeInDown"
          >
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/place/place-1.jpg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">10 Listing</span>
                    <h3 className="title">Australia</h3>
                    <Link href="/listing-grid">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/place/place-2.jpg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">10 Listing</span>
                    <h3 className="title">Australia</h3>
                    <Link href="/listing-grid">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/place/place-3.jpg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">10 Listing</span>
                    <h3 className="title">Australia</h3>
                    <Link href="/listing-grid">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/place/place-4.jpg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">10 Listing</span>
                    <h3 className="title">Australia</h3>
                    <Link href="/listing-grid">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="place-item place-item-one">
              <div className="place-thumbnail">
                <img src="assets/images/place/place-2.jpg" alt="Place Image" />
                <div className="place-overlay">
                  <div className="place-content text-center">
                    <span className="listing">10 Listing</span>
                    <h3 className="title">Australia</h3>
                    <Link href="/listing-grid">
                      <a className="arrow-btn">
                        <i className="ti-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* <!--====== End Place Section ======--> */}
        </Layout>
  );
};
export default Index2;
