import { request } from "../helpers/axios_helper";


export async function getModele() {
    try {
      const result = await request("GET", "/modeles", {}, 'application/json');
      const valiny = {
        columns: [
          { name: "idModele" },
          { name: "marque" },
          { name: "categorie" },
          { name: "nomModele" },
          { name: "annee" },
          { name: "nbrPlaces" },
          { name: "nbrPortes" },
          { name: "photo" }
        ],
        rows: result.data
      };
      return valiny;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function getModeleById(id) {
    try {
      const result = await request("GET", `/modeles/${id}`, {}, 'application/json');
      const valiny = {
        columns: [
          { name: "idModele" },
          { name: "marque" },
          { name: "categorie" },
          { name: "nomModele" },
          { name: "annee" },
          { name: "nbrPlaces" },
          { name: "nbrPortes" },
          { name: "photo" }
        ],
        rows: result.data
      };
      return valiny;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};



