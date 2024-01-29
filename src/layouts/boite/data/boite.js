import { request } from "helpers/axios_helper";


export async function getBoite () {
    try {
      const result = await request("GET", "/boite_vitesse", {});
      const valiny = {
        columns: [{ name: "idBoiteVitesse"}, {name: "nomBoiteVitesse"}],
        rows: result.data
      };
      console.log("Formatted Data:", valiny);
      return valiny;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function dropBoite (id) {
  try {
    await request("DELETE", `/boite_vitesse/${id}`, {});

  } catch (error) {
    throw error; 
  }
};

export async function updateBoite (id,nom) {
  try {
    await request("PUT", `/boite_vitesse/${id}`,nom );
  } catch (error) {
    throw error; 
  }
};

export async function addBoite (nom) {

  try {
    const vaovao = await request("POST", `/boite_vitesse/add`, nom);
    return vaovao.data;
  } catch (error) {
    throw error; 
  }
};


