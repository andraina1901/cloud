import React, { useState } from "react";
import PropTypes from "prop-types";  // Importez PropTypes
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Update_energie({energie, updateEnergie}) {
  const [formData, setFormData] = useState({ nomEnergie: energie ? energie.nomEnergie : "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEnergie(formData);
  };
  
  return (
    <div>
      <h3 style={{ marginBottom: "5%" }}>Update_energie</h3>
      <SoftBox>
        <form onSubmit={handleSubmit}>
          <SoftBox mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Libelle
            </SoftTypography>
            <TextField
              fullWidth
              type={"text"}
              name="energie"
              value={formData.nomEnergie}
              onChange={(e) => setFormData({ ...formData, nomEnergie: e.target.value })}
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
  );
}

Update_energie.propTypes = {
  energie: PropTypes.shape({
    nomEnergie: PropTypes.string,
    idEnergie: PropTypes.string,
    // ... autres propriétés de la catégorie si nécessaire
  }),
  updateEnergie: PropTypes.func.isRequired,
};

export default Update_energie;
