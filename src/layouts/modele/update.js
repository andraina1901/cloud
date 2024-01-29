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
import { getCategorie } from "layouts/categorie/data/categorie";
import { getMarque } from "layouts/marque/data/marque";

function Update_modele({ modele, updatemodele }) {
  const [categorie, setCategorie] = useState([]);
  useEffect (() => {
    getCategorie().then((response)=>{
      setCategorie(response.rows.data);
    }).catch(error =>{
      console.log(error);
    })
  },[]);

  const [cards, setCards] = useState([]);
  useEffect (() => {
    getMarque().then((response)=>{
      setCards(response.rows.data);
    }).catch(error =>{
      console.log(error);
    })
  },[]);

  const [formData, setFormData] = useState({
    categorie: modele ? modele.categorie : "", // Ajout de la propriété categorie
    nomModele: modele ? modele.nomModele : "",
    marque: modele ? modele.marque : "",
    annee: modele ? modele.annee : "",
    nbrPortes: modele ? modele.nbrPortes : "",
    nbrPlaces: modele ? modele.nbrPlaces : "",
    photo: modele ? modele.photo : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updatemodele(formData);
  };

  return (
    <div>
      <h3 style={{ marginBottom: "5%" }}>Modification de model</h3>
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
              value={formData.nomModele}
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
                {categorie.map((item) => (
                <MenuItem key={item.idCategorie} value={item.idCategorie}>{item.nomCategorie}</MenuItem>
              ))}
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
                   {cards.map((item) => (
                <MenuItem key={item.idMarque} value={item.idMarque}>{item.nomMarque}</MenuItem>
              ))}
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
                nbrPlaces
              </SoftTypography>
              <TextField
                style={{width:'165px'}}
                type={"number"}
                name="nbrPlaces"
                value={formData.nbrPlaces}
                onChange={(e) => setFormData({ ...formData, nbrPlaces: e.target.value })}
              />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
                nbPortes
              </SoftTypography>
              <TextField
                style={{width:'165px'}}
                type={"number"}
                name="nbPortes"
                value={formData.nbrPortes}
                onChange={(e) => setFormData({ ...formData, nbPortes: e.target.value })}
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
