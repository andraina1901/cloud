import GenericForm from "components/MyFormulaire/GenericForm";
import React from "react";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Button, Select, MenuItem, FormControl, Input, TextField} from "@mui/material";


function Ajout_modele() {

  const handleSubmit = (formData) => {
    console.log("Form data submitted:", formData);
    // Ajoutez votre logique pour traiter les données du formulaire ici
  };

  return (
    <div>
      <h3 style={{marginBottom: '5%'}}>Ajout de modele</h3>
      <SoftBox>
      <form onSubmit={handleSubmit}>
          <SoftBox  mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Libelle
            </SoftTypography>
            <TextField
              fullWidth
              type={"text"}
              name="hhehe"
            />

             {/* Champ de sélection pour le pays */}
          <FormControl fullWidth variant="outlined" margin="normal">
          <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Pays
            </SoftTypography>
            <Select
              labelId="country-label"
              id="country"
              name="country"
              IconComponent={() => <span>&#x25BC;</span>} 
            >
              <MenuItem value="usa">USA</MenuItem>
              <MenuItem value="canada">Canada</MenuItem>
              <MenuItem value="france">France</MenuItem>
            </Select>
          </FormControl>

          {/* Champ d'upload de photo */}
          <SoftBox mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Photo
            </SoftTypography>
            <Input
              type="file"
              accept="image/*"
              name="photo"
              inputProps={{ capture: "camera" }} // Permet la capture d'image depuis la caméra sur les appareils mobiles
            />
          </SoftBox>

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

export default Ajout_modele;