import GenericForm from "components/MyFormulaire/GenericForm";
import React from "react";

function Update_categorie() {
  const formFields = [
    { name: "name", label: "Libelle", required: true },
  ];

  const handleSubmit = (formData) => {
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      <h3 style={{marginBottom: '5%'}}>Update de categorie</h3>
      <GenericForm fields={formFields} onSubmit={handleSubmit} />
    </div>
  );
}

export default Update_categorie;