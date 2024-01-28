import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Input from "@mui/material/Input";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Update_modele({ modele, updatemodele }) {
  const [formData, setFormData] = useState({
    categorie: modele ? modele.categorie : "", // Ajout de la propriété categorie
    modele: modele ? modele.modele : "",
    marque: modele ? modele.marque : "",
    annee: modele ? modele.annee : "",
    porte: modele ? modele.porte : "",
    place: modele ? modele.place : "",
    photo: modele ? modele.photo : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updatemodele(formData);
  };

  return (
    <div>
      <h3 style={{ marginBottom: "5%" }}>Ajout de modele</h3>
      <SoftBox>
        <form onSubmit={handleSubmit}>
          <SoftBox mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Libelle
            </SoftTypography>
            <TextField
              fullWidth
              type={"text"}
              name="model"
              value={formData.modele}
              onChange={(e) => setFormData({ ...formData, modele: e.target.value })}
            />
          </SoftBox>

          <SoftBox mb={2} style={{ display: "flex" }}>
            <FormControl fullWidth variant="outlined" margin="normal" style={{ marginRight: "10px" }}>
              <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
                Categorie
              </SoftTypography>
              <Select
                labelId="categorie-label"
                id="categorie"
                name="categorie"
                value={formData.categorie}
                onChange={(e) => setFormData({ ...formData, categorie: e.target.value })}
                IconComponent={() => <span>&#x25BC;</span>}
              >
                <MenuItem value="citadine">citadine</MenuItem>
                <MenuItem value="crossower">crossower</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
              <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
                Marque
              </SoftTypography>
              <Select
                labelId="marque-label"
                id="marque"
                name="marque"
                value={formData.marque}
                onChange={(e) => setFormData({ ...formData, marque: e.target.value })}
                IconComponent={() => <span>&#x25BC;</span>}
              >
                <MenuItem value="toyota">toyota</MenuItem>
                <MenuItem value="audi">audi</MenuItem>
                <MenuItem value="mercedes">mercedes</MenuItem>
              </Select>
            </FormControl>
          </SoftBox>

          <SoftBox mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Annee
            </SoftTypography>
            <TextField
              fullWidth
              type={"number"}
              name="annee"
              value={formData.annee}
              onChange={(e) => setFormData({ ...formData, annee: e.target.value })}
            />
          </SoftBox>

          <SoftBox mb={2} style={{ display: 'flex' }}>
            <SoftBox mb={2} style={{ marginRight: '10px'}}>
              <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
                Place
              </SoftTypography>
              <TextField
                style={{width:'165px'}}
                type={"number"}
                name="place"
                value={formData.place}
                onChange={(e) => setFormData({ ...formData, place: e.target.value })}
              />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
                Porte
              </SoftTypography>
              <TextField
                style={{width:'165px'}}
                type={"number"}
                name="porte"
                value={formData.porte}
                onChange={(e) => setFormData({ ...formData, porte: e.target.value })}
              />
            </SoftBox>
          </SoftBox>

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

Update_modele.propTypes = {
  modele: PropTypes.object,
  updatemodele: PropTypes.func.isRequired,
};

export default Update_modele;
