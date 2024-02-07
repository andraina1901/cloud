import Slider from "react-slick";
import { ListingSliderOne } from "../../sliderProps";
import Link from "next/link";
import { Suggestion } from "./card/Suggestion";
export function ListingSug() {
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
            <Suggestion 
                user={'Liantsoa'}
                duree={'2mois'}
                model={'Peugeot 208'}
                prix={'20.000.000'}
                contact={'034 12 040 35'}
            />
            <Suggestion
                user={'Liantsoa'}
                duree={'2mois'}
                model={'Peugeot 208'}
                prix={'20.000.000'}
                contact={'034 12 040 35'}
            />
            <Suggestion
                user={'Liantsoa'}
                duree={'2mois'}
                model={'Peugeot 208'}
                prix={'20.000.000'}
                contact={'034 12 040 35'}
            />
            <Suggestion
                user={'Liantsoa'}
                duree={'2mois'}
                model={'Peugeot 208'}
                prix={'20.000.000'}
                contact={'034 12 040 35'}
            />
          </Slider>
        </div>
      </section>
    );
}