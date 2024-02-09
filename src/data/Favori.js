import { request } from "../helpers/axios_helper";


export async function getFavoriUser(id) {
    try {
      const result = await request("GET", `/favori/user/${id}`, {}, 'application/json');
      const valiny = {
        columns: [
            { name: "iduser" },
            { name: "annonce" }
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

export async function addFavori(data) {
    try {
      const vaovao = await request("POST", `/favori/add`, data, 'application/json');
      return vaovao.data;
    } catch (error) {
      throw error; 
    }
  };



