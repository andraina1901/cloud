import { request } from "../helpers/axios_helper";


export async function getCouleur() {
    try {
      const result = await request("GET", "/couleurs", {}, 'application/json');
      const valiny = {
        columns: [
            { name: "idCouleur" },
            { name: "nomCouleur" }
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

export async function getCouleurById(id) {
    try {
      const result = await request("GET", `/couleurs/${id}`, {}, 'application/json');
      const valiny = {
        columns: [
            { name: "idCouleur" },
            { name: "nomCouleur" }
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



