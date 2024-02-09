import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import ListingDetailsRight from "../src/components/ListingDetailsRight";
import Layout from "../src/layouts/Layout";
import { BarFavorite } from "../src/components/mine/card/BarFavorite";

const ListingDetails1 = () => {
  const [accordionActive, setAccordionActive] = useState("collapseOne");
  const setAccordion = (value) => (value === accordionActive ? "" : value),
    activeAccortion = (value) => (value === accordionActive ? true : false);

  return (
    <Layout>
      {/*====== Start Breadcrumbs section ======*/}
      <section className="page-breadcrumbs page-breadcrumbs-one pt-120 pb-70">
        <div className="container">
          <div className="breadcrumbs-wrapper-one">
            <h3 style={{marginBottom: '5%'}}>Liste des favoris</h3>
            <BarFavorite/>
            <BarFavorite/>
            <BarFavorite/>
            <BarFavorite/>
          </div>
        </div>
      </section>
      {/*====== End Breadcrumbs section ======*/}
      
    </Layout>
  );
};
export default ListingDetails1;
