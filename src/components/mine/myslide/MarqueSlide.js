import Slider from "react-slick";
import { ClientSliderOne } from "../../../sliderProps";
import { MarqueItem } from "./MarqueItem";

export function MarqueSlide() {
    return(
        <section className="client-area ">
        <div className="client-wrapper-one pb-120">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp">
                {/* <span className="sub-title">Featured List</span> */}
                <h2>Les marques les plus vendues</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <Slider
              {...ClientSliderOne}
              className="client-slider-one wow fadeInDown"
            >
            <MarqueItem src={"assets/images/client/01.png"}/>
            <MarqueItem src={"assets/images/client/01.png"}/>
            <MarqueItem src={"assets/images/client/01.png"}/>
            <MarqueItem src={"assets/images/client/01.png"}/>
            <MarqueItem src={"assets/images/client/01.png"}/>
            </Slider>
          </div>
        </div>
      </section>
    );
}