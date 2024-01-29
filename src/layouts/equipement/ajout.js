import GenericForm from "components/MyFormulaire/GenericForm";
import React from "react";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Button, Select, MenuItem, FormControl, Input, TextField} from "@mui/material";


function Ajout_equipement({addEquipement}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Récupérez les valeurs du formulaire
    const formData = {
      equipement: e.target.elements.Equipement.value,
    };

    // Appeler la fonction du parent pour ajouter la nouvelle catégorie
    addEquipement(formData);
  };
  return (
    <div>
      <h3 style={{marginBottom: '5%'}}>Ajout de Equipement</h3>
      <SoftBox>
      <form onSubmit={handleSubmit}>
          <SoftBox  mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Equipement
            </SoftTypography>
            <TextField
              fullWidth
              type={"text"}
              name="equipement"
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

Ajout_equipement.propTypes = {
  addEquipement: PropTypes.object.isRequired,
}


export default Ajout_equipement;