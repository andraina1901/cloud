import { request } from "helpers/axios_helper";


export async function getEquipement() {
    try {
      const result = await request("GET", "/equipement", {});
      const valiny = {
        columns: [{ name: "idEquipement"}, {name: "nomEquipement"}],
        rows: result.data
      };
      console.log("Formatted Data:", valiny);
      return valiny;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function dropEquipement(id) {
  try {
    await request("DELETE", `/equipement/${id}`, {});

  } catch (error) {
    throw error; 
  }
};

export async function updateEquipement(id,nom) {
  try {
    await request("PUT", `/equipement/${id}`,nom );
  } catch (error) {
    throw error; 
  }
};

export async function addEquipement(nom) {

  try {
    const vaovao = await request("POST", `/equipement/add`, nom);
    return vaovao.data;
  } catch (error) {
    throw error; 
  }
};


