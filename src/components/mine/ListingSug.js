import Slider from "react-slick";
import { ListingSliderOne } from "../../sliderProps";
import Link from "next/link";
import { Suggestion } from "./card/Suggestion";
import { useEffect } from "react";
import { getAnnonce } from "../../data/annonce";
import { useState } from "react";
import { getDuree } from "../../helpers/fonction";


export function ListingSug() {

  const [valiny,setValiny] = useState([]);
  useEffect (() => {
    getAnnonce().then((response)=>{
      setValiny(response.data);
    }).catch(error =>{
      console.log(error);
    })
  },[]);

    return(
        <section className="listing-grid-area pt-75 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <h2>Suggestions</h2>
              </div>
            </div>
          </div>
          <Slider
            {...ListingSliderOne}
            className="listing-slider-one wow fadeInDown"
          >
            {valiny.map((item) => (
                <Suggestion 
                  key={item.idAnnonce}
                  src={item.photo}
                  user={item.user.user}
                  duree={getDuree(item.dateheure)}
                  model={item.titre}
                  prix={item.prix}
                  contact={item.user.email}
              />
            )) } 
            
          </Slider>
        </div>
      </section>
    );
}