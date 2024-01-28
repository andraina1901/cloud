import React, { useState } from "react";
import PropTypes from "prop-types";  // Importez PropTypes
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Update_categorie({ category, updateCategorie }) {
  const [formData, setFormData] = useState({ categorie: category ? category.categorie : "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategorie(formData);
  };

  return (
    <div>
      <h3 style={{ marginBottom: "5%" }}>Update_categorie</h3>
      <SoftBox>
        <form onSubmit={handleSubmit}>
          <SoftBox mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Libelle
            </SoftTypography>
            <TextField
              fullWidth
              type={"text"}
              name="categorie"
              value={formData.categorie}
              onChange={(e) => setFormData({ ...formData, categorie: e.target.value })}
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

// Ajoutez la validation des props
Update_categorie.propTypes = {
  category: PropTypes.shape({
    categorie: PropTypes.string,
    // ... autres propriétés de la catégorie si nécessaire
  }),
  updateCategorie: PropTypes.func.isRequired,
};

export default Update_categorie;
