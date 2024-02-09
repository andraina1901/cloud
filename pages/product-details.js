import Link from "next/link";
import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import ProductSlider from "../src/components/Slider/ProductSlider";
import Layout from "../src/layouts/Layout";
import { reletedProductSlider } from "../src/sliderProps";
import { Equipement } from "../src/components/mine/Equipement";

const ProductDetails = () => {
  const [headerColor, setHeaderColor] = useState('gray');

  const handleClick = () => {
      const newColor = headerColor === 'gray' ? 'red' : 'gray';
      setHeaderColor(newColor);
  }

  return (
    <Layout>
      <section className="product-details-section pt-120 pb-115">
        <div className="container">
          <div className="product-details-wrapper mb-30">
            <div className="row">
              <ProductSlider />
              <div className="col-lg-4 col-md-12">
                <div className="product-info mt-30">
                
                  <span className="price">Peugeot 308</span>
                  <h3 className="title">Prix: 20.000ar</h3>
                  {/* <p>
                    Marque
                  </p> */}
                  <div className="product-meta">
                    <div className="listing-meta">
                      <ul>
                        <li>
                          <span>
                              <i className="ti-shopping-cart"></i>Ajouter
                            </span>
                        </li>
                        <li>
                          <span>
                            <i className="ti-heart" onClick={handleClick} style={{color: headerColor}}></i>
                            <a href="#" style={{color: headerColor}}>Favoris</a>
                          </span>
                        </li>
                      </ul>
                    </div>
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
         {/*  */}
         <Equipement/>
        </div>
      </section>
    </Layout>
  );
};
export default ProductDetails;
