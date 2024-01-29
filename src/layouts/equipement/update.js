import React, { useState } from "react";
import PropTypes from "prop-types";  // Importez PropTypes
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Update_equipement({equipement, updateEquipement}) {
  const [formData, setFormData] = useState({nomEquipement: equipement ? equipement.nomEquipement : ""})

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEquipement(formData);
  };
  
  return (
    <div>
      <h3 style={{ marginBottom: "5%" }}>Update_Equipement</h3>
      <SoftBox>
        <form onSubmit={handleSubmit}>
          <SoftBox mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Libelle
            </SoftTypography>
            <TextField
              fullWidth
              type={"text"}
              name="equipement"
              value={formData.nomEquipement}
              onChange={(e) => setFormData({ ...formData, nomEquipement: e.target.value })}
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

Update_equipement.propTypes = {
  equipement: PropTypes.shape({
    idEquipement: PropTypes.string,
    nomEquipement: PropTypes.string,
  }),
  updateEquipement: PropTypes.func.isRequired,
}



export default Update_equipement;
