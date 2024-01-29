import React, { useState } from "react";
import PropTypes from "prop-types";  // Importez PropTypes
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Update_boite({boite, updateBoite}) {

  const [formData, setFormData] = useState({ nomBoiteVitesse: boite ? boite.nomBoiteVitesse : "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBoite(formData);
  };

  return (
    <div>
    <h3 style={{ marginBottom: "5%" }}>Update_Boite</h3>
    <SoftBox>
      <form onSubmit={handleSubmit}>
        <SoftBox mb={2}>
          <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
            Libelle
          </SoftTypography>
          <TextField
            fullWidth
            type={"text"}
            name="boite"
            value={formData.nomBoiteVitesse}
            onChange={(e) => setFormData({ ...formData, nomBoiteVitesse: e.target.value })}
          />
          
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

  )
}

Update_boite.propTypes = {
  boite: PropTypes.shape({
    nomBoiteVitesse: PropTypes.string,
    idBoiteVitesse: PropTypes.string,
    // ... autres propriétés de la catégorie si nécessaire
  }),
  updateBoite: PropTypes.func.isRequired,
};



export default Update_boite;
