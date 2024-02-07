
import Slider from "react-slick";
import { PlaceSliderOne } from "../../../sliderProps";
import { ModelItem } from "./ModelItem";

export function ModelSlide(){
    return(
        <section className="place-area pt-115 pb-110">
        <div className="container-fluid place-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <h2>Les modeles les plus recherchees</h2>
              </div>
            </div>
          </div>
        
          <Slider
            {...PlaceSliderOne}
            className="place-slider-one wow fadeInDown"
          >

           <ModelItem src={"assets/images/place/place-2.jpg"} libelle={"Peugeot 208"}/>
           <ModelItem src={"assets/images/place/place-2.jpg"} libelle={"Hyundai starex"}/>
           <ModelItem src={"assets/images/place/place-2.jpg"} libelle={"Toyota corolla"}/>
           <ModelItem src={"assets/images/place/place-2.jpg"} libelle={"Renault zoe"}/>
           <ModelItem src={"assets/images/place/place-2.jpg"} libelle={"Renault megane"}/>
          

          </Slider>
        </div>
      </section>
    );
}