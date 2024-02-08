import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import ProductSlider from "../src/components/Slider/ProductSlider";
import Layout from "../src/layouts/Layout";
import { reletedProductSlider } from "../src/sliderProps";

const ProductDetails = () => {
  return (
    <Layout>
      <section className="product-details-section pt-120 pb-115">
        <div className="container">
          <div className="product-details-wrapper mb-30">
            <div className="row">
              <ProductSlider />
              <div className="col-lg-4 col-md-12">
                <div className="product-info mt-30">
                
                  <h3 className="title">Peugot 308</h3>
                  <span className="price">Prix</span>
                  <p>
                    Marque
                  </p>
                  <div className="product-meta">
                    <a href="#" className="wishlist-btn">
                      Add to Wishlist
                    </a>
                    <span className="variation">
                      <span className="title">Color:</span>
                      <span className="color color-1" />
                      <span className="color color-2" />
                      <span className="color color-3" />
                      <span className="color color-4" />
                    </span>
                    <span className="category">
                      <span className="title">Category:</span>
                      <a href="#">Light</a>,<a href="#">Titan</a>,
                      <a href="#">Plastic</a>
                    </span>
                    <span className="tags">
                      <span className="title">Tags:</span>
                      <a href="#">elcctric</a>,<a href="#">modern</a>,
                      <a href="#">lase</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="releted-product-area">
            <h3 className="releted-title">Related Product</h3>
            <Slider
              {...reletedProductSlider}
              className="releted-products-slider-one"
            >
              <div className="products-item products-item-one">
                <div className="product-img">
                  <img
                    src="assets/images/products/products-1.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="assets/images/products/products-1.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon cart-btn">
                        <i className="ti-shopping-cart" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products-details">
                      <a>Hand Dumbell</a>
                    </Link>
                  </h3>
                  <span className="price">
                    $250 <span className="pre-price">$270</span>
                  </span>
                </div>
              </div>
              <div className="products-item products-item-one">
                <div className="product-img">
                  <img
                    src="assets/images/products/products-2.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="assets/images/products/products-2.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon cart-btn">
                        <i className="ti-shopping-cart" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products-details">
                      <a>Green Plastic Light</a>
                    </Link>
                  </h3>
                  <span className="price">$120.00</span>
                </div>
              </div>
              <div className="products-item products-item-one">
                <div className="product-img">
                  <img
                    src="assets/images/products/products-3.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="assets/images/products/products-3.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon cart-btn">
                        <i className="ti-shopping-cart" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products-details">
                      <a>Leaser Photography</a>
                    </Link>
                  </h3>
                  <span className="price">$320.00</span>
                </div>
              </div>
              <div className="products-item products-item-one">
                <div className="product-img">
                  <img
                    src="assets/images/products/products-4.jpg"
                    alt="products Image"
                  />
                  <div className="product-overlay d-flex align-items-end justify-content-center">
                    <div className="product-meta">
                      <a
                        href="assets/images/products/products-4.jpg"
                        className="icon img-popup"
                      >
                        <i className="ti-zoom-in" />
                      </a>
                      <a href="#" className="icon cart-btn">
                        <i className="ti-shopping-cart" />
                      </a>
                      <a href="#" className="icon wishlist-btn">
                        <i className="ti-heart" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-info text-center">
                  <h3 className="title">
                    <Link href="/products-details">
                      <a>Nike Sports Shoe</a>
                    </Link>
                  </h3>
                  <span className="price">$232.00</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProductDetails;
