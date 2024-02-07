import React, { Component, Fragment } from "react";
import Slider from "react-slick";

export default class TestimoinalSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <Fragment>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          dots={false}
          arrows={false}
          autoplaySpeed={1500}
          focusOnSelect={true}
          autoplay={true}
          slidesToShow={3}
          slidesToScroll={1}
          className="testimonial-thumb-slider-one"
        >
          <div className="single-thumb">
            <img
              src="assets/images/testimonial/tm-thumb-1.jpg"
              alt="testimonial thumb"
            />
          </div>
          <div className="single-thumb">
            <img
              src="assets/images/testimonial/tm-thumb-2.jpg"
              alt="testimonial thumb"
            />
          </div>
          <div className="single-thumb">
            <img
              src="assets/images/testimonial/tm-thumb-3.jpg"
              alt="testimonial thumb"
            />
          </div>
          <div className="single-thumb">
            <img
              src="assets/images/testimonial/tm-thumb-2.jpg"
              alt="testimonial thumb"
            />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          dots={false}
          arrows={false}
          infinite={true}
          autoplaySpeed={1500}
          autoplay={true}
          fade={true}
          slidesToShow={1}
          slidesToScroll={1}
          className="testimonial-content-slider-one"
        >
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
              J'ai trouvé le site web très facile à utiliser. 
              J'ai pu trouver la voiture parfaite pour ma famille en quelques clics seulement. Le processus d'achat était simple et transparent, 
              et j'ai été très satisfaite du service client..{" "}
              </p>
              <div className="author-info">
                <div className="author-title">
                  <h4>Mertina</h4>
                  <span className="position">Mere de famille</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
              Je n'avais jamais acheté de voiture auparavant,
              mais le site web m'a rendu la tâche très facile. 
              J'ai pu comparer les prix et les caractéristiques de différents modèles en toute simplicité. 
              J'ai également trouvé des conseils très utiles sur le site.{" "}
              </p>
              <div className="author-info">
                <div className="author-title">
                  <h4>Tiary Heninkaja</h4>
                  <span className="position">Jeune conducteur</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
              J'ai été très impressionné par la qualité des photos et 
              des descriptions des véhicules sur le site web. J'ai également 
              apprécié la possibilité de contacter directement 
              le vendeur pour poser des questions.{" "}
              </p>
              <div className="author-info">
                <div className="author-title">
                  <h4>Ernest Rob</h4>
                  <span className="position">Acheteur experimenter</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
              Depuis que j'ai acheté la nouvelle Toyota Corolla pour 
              ABC Entreprise sur le site web, nos commerciaux gagnent 
              en efficacité sur le terrain. Le processus d'achat a été 
              d'une rapidité incroyable et le prix imbattable. 
              Je recommande vivement ce site à tous les professionnels !{" "}
              </p>
              <div className="author-info">
                <div className="author-title">
                  <h4>Rouge Benjamin</h4>
                  <span className="position">Professionnel</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}
