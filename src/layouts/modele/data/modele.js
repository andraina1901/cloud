import { upload } from "helpers/axios_helper";
import { request } from "helpers/axios_helper";


export async function getModel() {
    try {
      const result = await request("GET", "/modeles", {});
      const valiny = {
        columns: [
          { name: "idModele" },
          { name: "marque" },
          { name: "categorie" },
          { name: "nomModele" },
          { name: "annee" },
          { name: "nbrPlaces" },
          { name: "nbrPortes" },
          { name: "photo" },
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

export async function dropModel(id) {
  try {
    await request("DELETE", `/modeles/${id}`, {});

  } catch (error) {
    throw error; 
  }
};

export async function updateModel(id,nom) {
  try {
    await request("PUT", `/modeles/${id}`,nom );
  } catch (error) {
    throw error; 
  }
};

export async function addModel(nom) {

  try {
    const vaovao = await request('POST',`/modeles/add`, nom,'multipart/form-data');
    return vaovao.data;
  } catch (error) {
    throw error; 
  }
};



