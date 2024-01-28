import GenericForm from "components/MyFormulaire/GenericForm";
import React from "react";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Button, Select, MenuItem, FormControl, Input, TextField} from "@mui/material";


function Ajout_modele({addModel}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Récupérez les valeurs du formulaire
    const formData = {
      modele: e.target.elements.model.value,
      categorie: e.target.elements.categorie.value,
      marque: e.target.elements.marque.value,
      photo: e.target.elements.photo.value,
      annee: e.target.elements.annee.value,
      porte: e.target.elements.porte.value,
      place: e.target.elements.place.value,
    };

    // Appeler la fonction du parent pour ajouter la nouvelle catégorie
    addModel(formData);
  };

  return (
    <div >
      <h3 style={{marginBottom: '5%'}}>Ajout de modele</h3>
      <SoftBox>
      <form onSubmit={handleSubmit} >
          <SoftBox  mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Libelle
            </SoftTypography>
            <TextField
              fullWidth
              type={"text"}
              name="model"
            />
            
          
            <SoftBox mb={2} style={{ display: 'flex' }}>
          <FormControl fullWidth variant="outlined" margin="normal" style={{ marginRight: '10px'}}>
          <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Categorie
            </SoftTypography>
            <Select
              labelId="country-label"
              id="categorie"
              name="categorie"
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
              labelId="country-label"
              id="country"
              name="marque"
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

Ajout_modele.propTypes = {
  addModel: PropTypes.object.isRequired,
}

export default Ajout_modele;