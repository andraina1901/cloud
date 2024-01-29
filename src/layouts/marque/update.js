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
import { getPays } from "./data/marque";


function Update_marque({ marque, updateMarque  }) {

  
  const [cards, setCards] = useState([]);
  useEffect (() => {
    getPays().then((response)=>{
      setCards(response.rows.data);
    }).catch(error =>{
      console.log(error);
    })
  },[]);


  const [formData, setFormData] = useState({
    marque: marque ? marque.marque : "",
    pays: marque ? marque.pays : "",
    photo: marque ? marque.photo : "",
  });

  useEffect(() => {
    setFormData({
      marque: marque ? marque.marque : "",
      pays: marque ? marque.pays : "",
      photo: marque ? marque.photo : "",
    });
  }, [marque]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMarque(formData);
  };

  return (
    <div>
      <h3 style={{ marginBottom: "5%" }}>Mise à jour de la marque</h3>
      <SoftBox>
        <form onSubmit={handleSubmit}>
          <SoftBox mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              marque
            </SoftTypography>
            <TextField
              fullWidth
              type={"text"}
              name="marque"
              value={formData.marque}
              onChange={(e) => setFormData({ ...formData, marque: e.target.value })}
            />
          </SoftBox>

          <SoftBox mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Pays
            </SoftTypography>
            <FormControl fullWidth variant="outlined" margin="normal">
            <Select
                labelId="pays-label"
                id="pays"
                name="pays"
                value={formData.pays}  // Utilisez la propriété formData.pays comme valeur par défaut
                onChange={(e) => setFormData({ ...formData, pays: e.target.value })}
                IconComponent={() => <span>&#x25BC;</span>} 
              >
                     {cards.map((item) => (
                <MenuItem key={item.idPays} value={item.idPays}>{item.nomPays}</MenuItem>
              ))}
              </Select>
            </FormControl>
          </SoftBox>

          <SoftBox mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Photo
            </SoftTypography>
            <Input
              type="file"
              accept="image/*"
              name="photo"
              inputProps={{ capture: "camera" }} // Permet la capture d'image depuis la caméra sur les appareils mobiles
              onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
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

Update_marque.propTypes = {
  marque: PropTypes.object,
  updateMarque: PropTypes.func.isRequired,
  // : PropTypes.func.isRequired,
};

export default Update_marque;
