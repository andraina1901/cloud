import Link from "next/link";
import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import ProductSlider from "../src/components/Slider/ProductSlider";
import Layout from "../src/layouts/Layout";
import { reletedProductSlider } from "../src/sliderProps";
import { Equipement } from "../src/components/mine/Equipement";
import { getAnnonceById } from "../src/data/annonce";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProductDetails = () => {

  const router = useRouter();
  const { id } = router.query;

  const [headerColor, setHeaderColor] = useState('gray');
  const handleClick = () => {
      const newColor = headerColor === 'gray' ? 'red' : 'gray';
      setHeaderColor(newColor);
  }

  const [valiny,setValiny] = useState([]);
  useEffect (() => {
    getAnnonceById(id).then((response)=>{
      setValiny(response.data);
    }).catch(error =>{
      console.log(error);
    })
  },[]);

  return (
    <Layout>
      <section className="product-details-section pt-120 pb-115">
        <div className="container">
          <div className="product-details-wrapper mb-30">
            <div className="row">
              <ProductSlider />
              <div className="col-lg-4 col-md-12">
                <div className="product-info mt-30">
                
                  <span className="price">{valiny.titre}</span>
                  <h3 className="title">Prix: {valiny.prix}ar</h3>
                  {/* <p>
                    Marque
                  </p> */}
                  <div className="product-meta">

                    <span className="category">
                      <span className="title">Categorie: </span>
                      <a href="#">{valiny.voiture.modele.categorie.nomCategorie}</a>
                    </span>
                    <span className="tags">
                      <span className="title">Marque:</span>
                      <a href="#">{valiny.voiture.modele.marque.nomMarque}</a>
                    </span>
                    <span className="tags">
                      <span className="title">Kilometrage:</span>
                      <a href="#">{valiny.voiture.kilometrage}km</a>
                    </span>
                    <span className="tags">
                      <span className="title">Energie:</span>
                      <a href="#">{valiny.voiture.energie.nomEnergie}</a>
                    </span>
                     <span className="tags">
                      <span className="title">Boite de vitesse:</span>
                      <a href="#">{valiny.voiture.boiteVitesse.nomBoiteVitesse}</a>
                    </span>
                    <span className="tags">
                      <span className="title">Consommation:</span>
                      <a href="#">{valiny.voiture.consommation}L/100km</a>
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
