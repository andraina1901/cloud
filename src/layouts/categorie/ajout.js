import React from "react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";

function Ajout_categorie({ addCategorie }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Récupérez les valeurs du formulaire
        const formData = {
          nomCategorie: e.target.elements.categorie.value,
        };
        
        addCategorie(formData);
      };

  return (
    <div>
      <h3 style={{ marginBottom: "5%" }}>Ajout_categorie</h3>
      <SoftBox>
        <form onSubmit={handleSubmit}>
          <SoftBox mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Libelle
            </SoftTypography>
            <TextField fullWidth type={"text"} name="categorie" />
          </SoftBox>
          <SoftBox>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ margin: "2% 2% 2% 0%", color: "white" }}
            >
              Valider
            </Button>
          </SoftBox>
        </form>
      </SoftBox>
    </div>
  );
}

Ajout_categorie.propTypes = {
    addCategorie: PropTypes.object.isRequired,
}

export default Ajout_categorie;
