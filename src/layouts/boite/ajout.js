import GenericForm from "components/MyFormulaire/GenericForm";
import React from "react";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Button, Select, MenuItem, FormControl, Input, TextField} from "@mui/material";


function Ajout_boite({addBoite}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Récupérez les valeurs du formulaire
    const formData = {
      nomBoiteVitesse: e.target.elements.boite.value,
    };

    // Appeler la fonction du parent pour ajouter la nouvelle catégorie
    addBoite(formData);
  };
  return (
    <div>
      <h3 style={{marginBottom: '5%'}}>Ajout de Boite de vitesse</h3>
      <SoftBox>
      <form onSubmit={handleSubmit}>
          <SoftBox  mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Boite
            </SoftTypography>
            <TextField
              fullWidth
              type={"text"}
              name="boite"
            />
          </SoftBox>
        <SoftBox>
          <Button type="submit" variant="contained" color="secondary" style={{ margin: "2% 2% 2% 0%", color: "white" }}>
            Valider
          </Button>
        </SoftBox>
      </form>
    </SoftBox>
    </div>
  );
}

Ajout_boite.propTypes = {
  addBoite: PropTypes.object.isRequired,
}


export default Ajout_boite;