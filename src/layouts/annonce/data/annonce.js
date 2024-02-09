// Images
import team2 from "assets/images/team-2.jpg";
import { request } from "helpers/axios_helper";

export async function getAnnonce(){
  try {
    const result = await request("GET", "/annonce/invalid", {});
    const valiny = {
      columns: [
        { name: "id" },
      { name: "user" },
      { name: "voiture" },
      { name: "prix" },
      { name: "dateheure" },
      { name: "photo" },
      ],
      rows: result.data
    };
    console.log("Formatted Data:", valiny);
    return valiny;
  } catch (error) {
    console.error("API Error:", error);
    throw error; 
  }
}

export async function getAnnonceBy(id){
  try {
    const result = await request("GET", `/annonce/${id}`, {});
    const valiny = {
      columns: [
        { name: "id" },
      { name: "user" },
      { name: "voiture" },
      { name: "prix" },
      { name: "dateheure" },
      { name: "photo" },
      ],
      rows: result.data
    };
    console.log("Formatted Data:", valiny);
    return valiny;
  } catch (error) {
    console.error("API Error:", error);
    throw error; 
  }
}

export async function validerAnnonce(id) {
  try {
    await request("PUT", `/annonce/validate/${id}`,{});
  } catch (error) {
    throw error; 
  }
};

export function getPending_annonce(){
  const annonce ={
    columns: [
      { name: "id" },
      { name: "user" },
      { name: "voiture" },
      { name: "dateheure" },
      { name: "prix" },
      { name: "photo" },
    ],
  
    rows: [
      {
        id: '1',
        user: "Pending",
        voiture: "Mustang 201",
        dateheure: "20-01-2024",
        prix: "20000",
        photo: team2,
      },
      {
        id: '2',
        user: "Pending",
        voiture: "Mustang 100",
        dateheure: "20-01-2024",
        prix: "30000",
        photo: team2,
      },
    ],
};
  return annonce;
}

