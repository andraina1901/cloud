// src/PhotoUploader.js
import React, { useState } from 'react';
import axios from 'axios';

const PhotoUploader = () => {
  const [file, setFile] = useState(null);
  const [idAnnonce, setIdAnnonce] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleIdAnnonceChange = (e) => {
    setIdAnnonce(e.target.value);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('idannonce', idAnnonce);

    axios.post('http://localhost:8081/tomobilina/photo_annonce/add', formData)
      .then(response => {
        console.log(response.data);
        console.log(formData.values);
        // Gérer la réponse du serveur si nécessaire
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi de la photo:', error);
      });
  };

  return (
    <div>
      <h1>Uploader une photo</h1>
      <div>
        <label>Sélectionner une photo:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <div>
        <label>ID de l'annonce:</label>
        <input type="text" value={idAnnonce} onChange={handleIdAnnonceChange} />
      </div>
      <button onClick={handleUpload}>Uploader</button>
    </div>
  );
};

export default PhotoUploader;