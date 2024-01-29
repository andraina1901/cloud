import { request } from "helpers/axios_helper";


export async function getMarque() {
    try {
      const result = await request("GET", "/marques", {});
      const valiny = {
        columns: [{ name: "idMarque"}, {name: "nomMarque"},{name: "pays"},{name: "photo"}],
        rows: result.data
      };
      console.log("Formatted Data:", valiny);
      return valiny;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function getPays() {
  try {
    const result = await request("GET", "/paysmarques", {});
    const valiny = {
      columns: [{ name: "idPays"}, {name: "nomPays"},{name: "pays"},{name: "etat"}],
      rows: result.data
    };
    console.log("Formatted Data:", valiny);
    return valiny;
  } catch (error) {
    console.error("API Error:", error);
    throw error; 
  }
};


export async function dropMarque (id) {
  try {
    await request("DELETE", `/marques/${id}`, {});

  } catch (error) {
    throw error; 
  }
};

export async function updateMarque (id,nom) {
  try {
    await request("PUT", `/marques/${id}`,nom );
  } catch (error) {
    throw error; 
  }
};

export async function addMarque (nom) {

  try {
    const vaovao = await request("POST", `/marques/add`, nom);
    return vaovao.data;
  } catch (error) {
    throw error; 
  }
};
