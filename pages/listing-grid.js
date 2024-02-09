import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import RangeSlider from "../src/components/RangeSlider";
import Layout from "../src/layouts/Layout";
import { Suggestion } from "../src/components/mine/card/Suggestion";
import FilterForm from "../src/components/FilterForm";

const ListingGrid = () => {
  return (
    <Layout>
      {/* <PageBanner title={"Listing Grid"} pageName={"Listing"} /> */}
      <section className="listing-grid-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <FilterForm/>
            <div className="col-lg-8">
              
              <div className="listing-grid-wrapper">
                <div className="row">
              
                  <div className="col-md-6 col-sm-12" style={{marginBottom: '3%'}}>
                 
                    <Suggestion
                      src={"assets/images/listing/mavoiture2.jpg"} 
                      user={'Liantsoa'}
                      duree={'2mois'}
                      model={'Peugeot 208'}
                      prix={'20.000.000'}
                      contact={'034 12 040 35'}
                  />
                  </div>
                  <div className="col-md-6 col-sm-12">
                 
                    <Suggestion 
                     src={"assets/images/listing/mavoiture3.jpg"} 
                      user={'Liantsoa'}
                      duree={'2mois'}
                      model={'Peugeot 208'}
                      prix={'20.000.000'}
                      contact={'034 12 040 35'}
                  />
                  </div>
                  <div className="col-md-6 col-sm-12">
                 
                    <Suggestion 
                     src={"assets/images/listing/mavoiture.jpg"} 
                      user={'Liantsoa'}
                      duree={'2mois'}
                      model={'Peugeot 208'}
                      prix={'20.000.000'}
                      contact={'034 12 040 35'}
                  />
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ListingGrid;
