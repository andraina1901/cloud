import { request } from "../helpers/axios_helper";


export async function getBoiteVitesse() {
    try {
      const result = await request("GET", "/boite_vitesse", {}, 'application/json');
      const valiny = {
        columns: [
            { name: "idBoiteVitesse" },
            { name: "nomBoiteVitesse" }
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

export async function getBoiteVitesseById(id) {
    try {
      const result = await request("GET", `/boite_vitesse/${id}`, {}, 'application/json');
      const valiny = {
        columns: [
            { name: "idBoiteVitesse" },
            { name: "nomBoiteVitesse" }
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



