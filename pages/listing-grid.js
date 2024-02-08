import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import RangeSlider from "../src/components/RangeSlider";
import Layout from "../src/layouts/Layout";
import { Suggestion } from "../src/components/mine/card/Suggestion";

const ListingGrid = () => {
  return (
    <Layout>
      {/* <PageBanner title={"Listing Grid"} pageName={"Listing"} /> */}
      <section className="listing-grid-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-listing-widget mb-30 wow fadeInUp">
                <div className="form_group">
                        <input
                          type="search"
                          className="form_control"
                          placeholder="Search keyword"
                          name="search"
                          required=""
                        />
                        <i className="ti-search" />
                      </div>
                      
                  <h4 className="widget-title">Marques/Models</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="search-form">
                     
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected="Category">
                            Category
                          </option>
                          <option value={1}>Museums</option>
                          <option value={2}>Restaurant</option>
                          <option value={3}>Party Center</option>
                          <option value={4}>Fitness Zone</option>
                          <option value={5}>Game Field</option>
                          <option value={6}>Job &amp; Feeds</option>
                          <option value={7}>Shooping</option>
                          <option value={8}>Art Gallery</option>
                        </select>
                      </div>
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected="Location">
                            Location
                          </option>
                          <option value={1}>Dhaka</option>
                          <option value={2}>Delhi</option>
                          <option value={3}>lahore</option>
                          <option value={4}>Rome</option>
                          <option value={5}>New york</option>
                          <option value={6}>Pris</option>
                          <option value={7}>Bern</option>
                          <option value={8}>Bangkok</option>
                        </select>
                      </div>
                    </div>
                    <div className="price-range-widget">
                    <h4 className="widget-title">Caractéristiques</h4>
                    <RangeSlider />

                      <select className="wide">
                        <option disabled selected="Default price">
                          Default price
                        </option>
                        <option value={1}>$10-$30</option>
                        <option value={2}>$30-$70</option>
                        <option value={3}>$70-$100</option>
                        <option value={4}>$100-$130</option>
                        <option value={5}>$130-$150</option>
                      </select>
                    </div>
                    <div className="form_group">
                      <button className="main-btn icon-btn">Search Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
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
