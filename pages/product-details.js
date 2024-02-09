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

                    <span className="category">
                      <span className="title">Categorie: </span>
                      <a href="#">Berline</a>
                    </span>
                    <span className="tags">
                      <span className="title">Marque:</span>
                      <a href="#">Peugeot</a>
                    </span>
                    <span className="tags">
                      <span className="title">Kilometrage:</span>
                      <a href="#">10.000km</a>
                    </span>
                    <span className="tags">
                      <span className="title">Energie:</span>
                      <a href="#">Essence</a>
                    </span>
                     <span className="tags">
                      <span className="title">Boite de vitesse:</span>
                      <a href="#">Automatique</a>
                    </span>
                    <span className="tags">
                      <span className="title">Consommation:</span>
                      <a href="#">13L/100km</a>
                    </span>

                  </div>
                  
                  <div className="listing-meta">
                      <ul className="row">
                        <li className="col-lg-4">
                          <span>
                              <i className="ti-shopping-cart"></i>Ajouter
                            </span>
                        </li>
                        <li className="col-lg-4">
                          <span>
                            <i className="ti-heart" onClick={handleClick} style={{color: headerColor}}></i>
                            <a href="#" style={{color: headerColor}}>Favoris</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div style={{marginTop: '5%'}}>
                      <ul className="row">
                        <li className="col-lg-4">
                        <a className="main-btn icon-btn">Contacter</a>
                    
                        </li>
                      </ul>
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
