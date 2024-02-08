// import { Annonce } from "./mine/card/Annonce";
import { Annonce } from "./mine/card/Annonce";

export function AnnonceHisto() {
    return(
        <section className="listing-grid-area pt-115 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <h2>Historiques Annonces </h2>
              </div>
            </div>
          </div>
          <div className="row">
           
            <Annonce
                user={'Liantsoa'}
                duree={'2mois'}
                model={'Peugeot 208'}
                prix={'20.000.000'}
                contact={'034 12 040 35'}
            />
             <Annonce
                user={'Liantsoa'}
                duree={'2mois'}
                model={'Peugeot 208'}
                prix={'20.000.000'}
                contact={'034 12 040 35'}
            />
          </div>
        </div>
      </section>
    );
}