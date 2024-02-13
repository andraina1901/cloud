import { request } from "../helpers/axios_helper";

export async function getAnnonce() {
    try {
      const result = await request("GET", "/annonce/valid", {});
      const valiny = result.data
      console.log("Formatted Data:", valiny);
      return valiny;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function getAnnonceById(id) {
    try {
      const result = await request("GET", `/annonce/${id}`, {});
      const valiny = result.data
      console.log("Formatted Data:", valiny);
      return valiny;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};
