import { upload } from "../helpers/axios_helper";
import { request } from "../helpers/axios_helper";


export async function getVoiture() {
    try {
      const result = await request("GET", "/voiture", {}, 'application/json');
      const valiny = {
        columns: [
          { name: "idVoiture" },
          { name: "modele" },
          { name: "kilometrage" },
          { name: "energie" },
          { name: "boiteVitesse" },
          { name: "couleur" },
          { name: "consommation" }
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

export async function addVoiture(data) {
  try {
    const vaovao = await request("POST", `/voiture/add`, data, 'application/json');
    return vaovao.data;
  } catch (error) {
    throw error; 
  }
};




