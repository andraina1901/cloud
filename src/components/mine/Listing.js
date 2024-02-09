import Link from "next/link";
import { Booste } from "./card/Booste";
export function Listing() {
    return(
        <section className="listing-grid-area pt-115 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-75 wow fadeInUp">
                <span className="sub-title">Featured List</span>
                <h2>Annonces Boostees</h2>
              </div>
            </div>
          </div>
          <div className="row">
           
            <Booste
                src={"assets/images/listing/mavoiture.jpg"}
                user={'Liantsoa'}
                duree={'2mois'}
                model={'Peugeot 208'}
                prix={'20.000.000'}
                contact={'034 12 040 35'}
            />
             <Booste
                src={"assets/images/listing/mavoiture2.jpg"}
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