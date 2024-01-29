// Images
import team2 from "assets/images/team-2.jpg";

export function getAnnonce(){
  const annonce ={
    columns: [
      { name: "id" },
      { name: "user" },
      { name: "voiture" },
      { name: "prix" },
      { name: "dateheure" },
      { name: "photo" },
    ],
  
    rows: [
      {
        id: '1',
        user: "Jeremia Rafano",
        voiture: "Mustang 201",
        dateheure: "20-01-2024",
        prix: "20000",
        photo: team2,
      },
      {
        id: '2',
        user: "Jeremia Rafano",
        voiture: "Mustang 100",
        dateheure: "20-01-2024",
        prix: "30000",
        photo: team2,
      },
    ],
};
  return annonce;
}

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

