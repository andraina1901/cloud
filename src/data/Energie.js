import { request } from "../helpers/axios_helper";


export async function getEnergie() {
    try {
      const result = await request("GET", "/energie", {}, 'application/json');
      const valiny = {
        columns: [
            { name: "idEnergie" },
            { name: "nomEnergie" }
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

export async function getEnergieById(id) {
    try {
      const result = await request("GET", `/energie/${id}`, {}, 'application/json');
      const valiny = {
        columns: [
          { name: "idEnergie" },
          { name: "nomEnergie" }
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



