import GenericForm from "components/MyFormulaire/GenericForm";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Button, Select, MenuItem, FormControl, Input, TextField} from "@mui/material";
import { getCategorie } from "layouts/categorie/data/categorie";
import { getMarque } from "layouts/marque/data/marque";


function Ajout_modele({addModel}) {

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

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file+"   fileeee");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Récupérez les valeurs du formulaire
    // const formData = {
    //   modele: e.target.elements.model.value,
    //   categorie: e.target.elements.categorie.value,
    //   marque: e.target.elements.marque.value,
    //   annee: e.target.elements.annee.value,
    //   porte: e.target.elements.porte.value,
    //   place: e.target.elements.place.value,
    // };
    const formData = new FormData();
    formData.append('nommodele', e.target.elements.model.value);
    formData.append('idcategorie', e.target.elements.categorie.value);
    formData.append('idmarque', e.target.elements.marque.value);
    formData.append('annee', e.target.elements.annee.value);
    formData.append('nbrportes', e.target.elements.porte.value);
    formData.append('nbrplaces', e.target.elements.place.value);
    formData.append('photo',file);
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
              labelId="country-label"
              id="country"
              name="marque"
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
              name="file"
              inputProps={{ capture: "camera" }} // Permet la capture d'image depuis la caméra sur les appareils mobiles
              onChange={handleFileChange} 
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