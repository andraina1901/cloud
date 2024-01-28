import React, { useState } from "react";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Button, TextField } from "@mui/material";

function GenericForm({ fields, onFormSubmit }) {
  // Utilisez un état local pour chaque champ
  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e, fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appelle la fonction de rappel du composant parent avec les données du formulaire
    onFormSubmit(formData);
  };

  return (
    <SoftBox>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <SoftBox key={field.name} mb={2}>
            <SoftTypography variant="subtitle1" mb={1} style={{ fontSize: "12px" }}>
              {field.label}
            </SoftTypography>
            <TextField
              fullWidth
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(e, field.name)}
              required={field.required}
              placeholder={field.placeholder}
              variant="outlined"
            />
          </SoftBox>
        ))}
        <SoftBox>
          <Button type="submit" variant="contained" color="secondary" style={{ margin: "2% 2% 2% 0%", color: "white" }}>
            Valider
          </Button>
        </SoftBox>
      </form>
    </SoftBox>
  );
}

GenericForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
      required: PropTypes.bool,
      placeholder: PropTypes.string,
    })
  ).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default GenericForm;
