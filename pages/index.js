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
import { MainSearch } from "../src/components/mine/MainSearch";
import { Categorie } from "../src/components/mine/Categorie";
import { Listing } from "../src/components/mine/Listing";
import { Feedback } from "../src/components/mine/Feedback";
import { ListingSug } from "../src/components/mine/ListingSug";
import { MarqueSlide } from "../src/components/mine/myslide/MarqueSlide";
import { ModelSlide } from "../src/components/mine/myslide/ModelSlide";


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
                  Votre voiture de rêve,
                  </h1>
                  <h3 className="wow fadeInDown" data-wow-delay="50ms">
                  à portée de clic. 
                  </h3>
                  <MainSearch/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Start Category Section ======--> */}
      <Categorie/>
      {/* <!--====== Start Listing Section ======--> */}
      <Listing/>
      {/*====== Start Testimonial Section ======*/}
     <Feedback/>
      {/* <!--====== Start Popular Listing Section ======--> */}
     <ListingSug/>
      {/* <!--====== End Popular Listing Section ======--> */}
      <MarqueSlide/>
      {/* <!--====== Start Place Section ======--> */}
      <ModelSlide/>
      {/* <!--====== End Place Section ======--> */}
        </Layout>
  );
};
export default Index2;
