import { request } from "helpers/axios_helper";


export async function getCategorie () {
    try {
      const result = await request("GET", "/categories", {});
      const valiny = {
        columns: [{ name: "idCategorie"}, {name: "nomCategorie"}],
        rows: result.data
      };
      console.log("Formatted Data:", valiny);
      return valiny;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function dropCategorie (id) {
  try {
    await request("DELETE", `/categories/${id}`, {});

  } catch (error) {
    throw error; 
  }
};

export async function updateCategorie (id,nom) {
  try {
    await request("PUT", `/categories/${id}`,nom );
  } catch (error) {
    throw error; 
  }
};

export async function addCategorie (nom) {

  try {
    const vaovao = await request("POST", `/categories/add`, nom);
    return vaovao.data;
  } catch (error) {
    throw error; 
  }
};


