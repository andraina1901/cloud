import { request } from "helpers/axios_helper";


export async function getEnergie () {
    try {
      const result = await request("GET", "/energie", {});
      const valiny = {
        columns: [{ name: "idEnergie"}, {name: "nomEnergie"}],
        rows: result.data
      };
      console.log("Formatted Data:", valiny);
      return valiny;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function dropEnergie (id) {
  try {
    await request("DELETE", `/energie/${id}`, {});

  } catch (error) {
    throw error; 
  }
};

export async function updateEnergie (id,nom) {
  try {
    await request("PUT", `/energie/${id}`,nom );
  } catch (error) {
    throw error; 
  }
};

export async function addEnergie (nom) {

  try {
    const vaovao = await request("POST", `/energie/add`, nom);
    return vaovao.data;
  } catch (error) {
    throw error; 
  }
};


