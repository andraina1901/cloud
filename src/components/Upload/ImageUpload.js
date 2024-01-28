import React, { useState } from 'react';

import Edit from "@mui/icons-material/Edit";
const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const readURL = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        // Utilisez setState pour mettre à jour l'état local
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    readURL(e.target);
  };

  return (
    <div className="avatar-upload">
        <div className="avatar-edit">
            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
            <label >
            <Edit/>
            {/* <Edit */}
            </label>
        </div>
        <div className="avatar-preview">
            <div id="imagePreview" style={{ backgroundImage: `url(${previewImage})`}}>
            </div>
        </div>
  </div>
  );
};

export default ImageUpload;

