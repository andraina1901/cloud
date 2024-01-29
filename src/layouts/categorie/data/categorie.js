import { request } from "helpers/axios_helper";


export async function getCategorie () {
    try {
      const result = await request("GET", "/tomobilina/categories", {});
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
    await request("DELETE", `/categorys/${id}`, {});

  } catch (error) {
    throw error; 
  }
};

export async function updateCategorie (id,nom) {
  let data = {nom:nom}
  try {
    await request("PUT", `/categorys/${id}`,data );

  } catch (error) {
    throw error; 
  }
};

export async function addCategorie (id,nom) {
  let data = {nom:nom}
  try {
    await request("POST", `/categorys/${id}`, data);

  } catch (error) {
    throw error; 
  }
};


