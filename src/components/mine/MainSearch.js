import Link from "next/link";
import React, { useState } from "react";


export function MainSearch() {
  const [selectedBrand, setSelectedBrand] = useState("01");
    const [selectedModel, setSelectedModel] = useState("01");
    const [selectedFuel, setSelectedFuel] = useState("01");

    return(
        <div
            className="hero-search-wrapper wow fadeInUp"
            data-wow-delay="70ms"
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="form_group">
                    <select className="wide">
                      <option value="01">Categorie</option>
                      <option value="02">Restaurant</option>
                      <option value="03">Party Center</option>
                      <option value="04">Fitness Zone</option>
                      <option value="05">Game Field</option>
                    </select>
                  </div>
                </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="form_group">
                    <select className="wide">
                      <option value="01">Marque</option>
                      <option value="02">Restaurant</option>
                      <option value="03">Party Center</option>
                      <option value="04">Fitness Zone</option>
                      <option value="05">Game Field</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="form_group">
                    <select className="wide">
                      <option value="01">Modele</option>
                      <option value="02">Restaurant</option>
                      <option value="03">Party Center</option>
                      <option value="04">Fitness Zone</option>
                      <option value="05">Game Field</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                  <div className="form_group">
                    <Link href={`/listing-grid?idCategorie=${selectedBrand}&idModel=${selectedModel}&idCarburant=${selectedFuel}`}>
                      <a className="main-btn icon-btn">Rechercher</a>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
    );
} 