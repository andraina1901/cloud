import Link from "next/link";
import React from "react";
import { OneCategorie } from "./OneCategorie";
export function Categorie() {
    return(
        <section className="category-area">
        <div className="container">
          <div className="category-wrapper-one wow fadeInDown">
            <div className="row no-gutters">

                <OneCategorie nom="citadine"/>
                <OneCategorie nom="citadine"/>
                <OneCategorie nom="citadine"/>
                <OneCategorie nom="citadine"/>
                <OneCategorie nom="citadine"/>
                <OneCategorie nom="citadine"/>

              
            </div>
          </div>
        </div>
      </section>
    );
}