import axios from "axios";
import { upload } from "../helpers/axios_helper";
import { request } from "../helpers/axios_helper";
import { useEffect } from 'react';
import { getUser } from '../data/User';


export async function getAnnonce() {
    try {
      const result = await request("GET", "/annonce/valid", {}, 'application/json');
      const valiny = {
        columns: [
          { name: "idAnnonce" },
          { name: "titre" },
          { name: "descriptions" },
          { name: "user" },
          { name: "voiture" },
          { name: "prix" },
          { name: "photo" },
          { name: "dateheure" },
          { name: "etat" },
        ],
        rows: result.data
      };
      return valiny;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function getAnnonceUser(id) {
  try {
    const result = await request("GET", `/annonce/user/${id}`, {}, 'application/json');
    const valiny = {
      columns: [
        { name: "idAnnonce" },
        { name: "titre" },
        { name: "descriptions" },
        { name: "user" },
        { name: "voiture" },
        { name: "prix" },
        { name: "photo" },
        { name: "dateheure" },
        { name: "etat" },
      ],
      rows: result.data
    };
    return valiny;
  } catch (error) {
    console.error("API Error:", error);
    throw error; 
  }
};

export async function getAnnonceById(id) {
    try {
      const result = await request("GET", `/annonce/${id}`, {}, 'application/json');
      const valiny = {
        columns: [
          { name: "idAnnonce" },
          { name: "titre" },
          { name: "descriptions" },
          { name: "user" },
          { name: "voiture" },
          { name: "prix" },
          { name: "photo" },
          { name: "dateheure" },
          { name: "etat" },
        ],
        rows: result.data
      };
      console.log("Formatted Data:", valiny);
      return valiny;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function vendreAnnonce(id) {
  try {
    await request("PUT", `/annonce/vente/${id}`,nom , 'application/json');
  } catch (error) {
    throw error; 
  }
};

export async function addAnnonce(data, photo) {

  try {
    const formData = new FormData();
    formData.append('descriptions', data.descriptions);
    formData.append('titre', data.titre);
    formData.append('idUser', data.idUser);
    formData.append('idVoiture', data.idVoiture);
    formData.append('prix', data.prix);
    formData.append('photo', photo);
    console.log(photo)
    console.log("itoleiz")
    console.log(formData.get('photo').name)
    const vaovao = await request("POST", '/annonce/add', formData, 'multipart/form-data');
    console.log(vaovao.data)
    return vaovao.data;
  } catch (error) {
    throw error; 
  }
};



