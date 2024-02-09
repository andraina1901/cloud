// import { useState } from "react";

const FilterForm = () => {
  return(
    <div className="col-lg-4">
  <div className="sidebar-widget-area">
    <div className="widget search-listing-widget mb-30 wow fadeInUp">
      <h4 className="widget-title">Marques/Modèles</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="search-form">
          <div className="form_group">
            <select className="wide" name="marque">
              <option disabled selected>Marque</option>
              <option value="marque1">Marque 1</option>
              <option value="marque2">Marque 2</option>
              {/* Ajoutez d'autres options de marque si nécessaire */}
            </select>
          </div>
          <div className="form_group">
            <select className="wide" name="categorie">
              <option disabled selected>Catégorie</option>
              <option value="categorie1">Catégorie 1</option>
              <option value="categorie2">Catégorie 2</option>
              {/* Ajoutez d'autres options de catégorie si nécessaire */}
            </select>
          </div>
          <div className="form_group">
            <select className="wide" name="model">
              <option disabled selected>Modèle</option>
              <option value="model1">Modèle 1</option>
              <option value="model2">Modèle 2</option>
              {/* Ajoutez d'autres options de modèle si nécessaire */}
            </select>
          </div>
        </div>
        <div className="price-range-widget">
          <h4 className="widget-title">Caractéristiques</h4>
            <div className="form_group">
                <input type="text" className="form_control" placeholder="Kilométrage" name="kilometrage" />
            </div>
            <div className="form_group">
            <select className="wide" name="cpuleur">
              <option disabled selected>Couleur</option>
              <option value="marque1">Marque 1</option>
              <option value="marque2">Marque 2</option>
              {/* Ajoutez d'autres options de marque si nécessaire */}
            </select>
            </div>
            <div className="form_group">
                <input type="text" className="form_control" placeholder="Nombre de places" name="nbPlaces" />
            </div>
            <div className="form_group">
                <input type="text" className="form_control" placeholder="Nombre de portes" name="nbPortes" />
            </div>
        </div>
            <div className="price-range-widget">
                <h4 className="widget-title">Prix</h4>
            <div className="form_group">
                <input type="text" className="form_control" placeholder="Prix min" name="prixMin" />
            </div>
            <div className="form_group">
                <input type="text" className="form_control" placeholder="Prix max" name="prixMax" />
            </div>
          </div>
        
          <div className="price-range-widget">
            <h4 className="widget-title">Dimensions</h4>
            <div className="form_group">
                <input type="text" className="form_control" placeholder="Longueur" name="longueur" />
            </div>
            <div className="form_group">
                <input type="text" className="form_control" placeholder="Largeur" name="largeur" />
            </div>
            <div className="form_group">
                <input type="text" className="form_control" placeholder="Volume de coffre" name="volumeCoffre" />
            </div>
            </div>
        <div className="form_group">
          <button className="main-btn icon-btn">Rechercher Maintenant</button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default FilterForm;
