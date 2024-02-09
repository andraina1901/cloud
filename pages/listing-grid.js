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
              <div className="listing-search-filter mb-40">
                <div className="row">
                  <div className="col-md-8">
                    <div className="filter-left d-flex align-items-center">
                      <div className="show-text">
                        <span>Showing Result 1-09</span>
                      </div>
                      <div className="sorting-dropdown">
                        <select>
                          <option disabled selected="Default Sorting">
                            Default Sorting
                          </option>
                          <option value={1}>Museums</option>
                          <option value={2}>Restaurant</option>
                          <option value={3}>Party Center</option>
                          <option value={4}>Fitness Zone</option>
                          <option value={5}>Game Field</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="filter-right">
                      <ul className="filter-nav">
                        <li>
                          <Link href="/listing-grid">
                            <a className="active">
                              <i className="ti-view-grid" />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-wrapper">
                <div className="row">
              
                  <div className="col-md-6 col-sm-12" style={{marginBottom: '3%'}}>
                 
                    <Suggestion 
                      user={'Liantsoa'}
                      duree={'2mois'}
                      model={'Peugeot 208'}
                      prix={'20.000.000'}
                      contact={'034 12 040 35'}
                  />
                  </div>
                  <div className="col-md-6 col-sm-12">
                 
                    <Suggestion 
                      user={'Liantsoa'}
                      duree={'2mois'}
                      model={'Peugeot 208'}
                      prix={'20.000.000'}
                      contact={'034 12 040 35'}
                  />
                  </div>
                  <div className="col-md-6 col-sm-12">
                 
                    <Suggestion 
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
