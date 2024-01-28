import GenericForm from "components/MyFormulaire/GenericForm";
import React from "react";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Button, Select, MenuItem, FormControl, Input, TextField} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InputAdornment from '@mui/material/InputAdornment';


function Ajout_marque({addMarque}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      marque: e.target.elements.marque.value,
      pays: e.target.elements.pays.value,
      photo: e.target.elements.photo.value,
    };
    addMarque(formData);
  };
 
  // const handleFileChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  //   readURL(e.target);
  // };
  return (
    
    <div>
      <h3 style={{marginBottom: '5%'}}>Ajout de marque</h3>
      <SoftBox>
      <form onSubmit={handleSubmit}>
          <SoftBox  mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Libelle
            </SoftTypography>
            <TextField
              fullWidth
              type={"text"}
              name="marque"
            />
             {/* Champ de sélection pour le pays */}
          <FormControl fullWidth variant="outlined" margin="normal">
          <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Pays
            </SoftTypography>
            <Select
              labelId="country-label"
              id="country"
              name="pays"
              IconComponent={() => <span>&#x25BC;</span>} 
            >
              <MenuItem value="usa">USA</MenuItem>
              <MenuItem value="canada">Canada</MenuItem>
              <MenuItem value="france">France</MenuItem>
            </Select>
          </FormControl>

          {/* Champ d'upload de photo */}
          <SoftBox mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              Photo
            </SoftTypography>
            <Input
              type="file"
              accept="image/*"
              name="photo"
              style={{ display: 'none' }}
              inputProps={{ capture: 'camera' }}
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
Ajout_marque.propTypes = {
  addMarque: PropTypes.object.isRequired,
}
export default Ajout_marque;