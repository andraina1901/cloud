import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import burceMars from "assets/images/bruce-mars.jpg";
import SoftTypography from "components/SoftTypography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Photo from "./details/photo";
import Principal from "./details/principal";
import Description from "./details/desciption";
import Equipement from "./details/equipement";
import SoftBox from "components/SoftBox";
import { useParams } from "react-router-dom";
import { getAnnonceBy } from "./data/annonce";
import { useEffect, useState } from "react";
import { getDate } from "helpers/fonction";

function Details_annonce() {
    const { id } = useParams();
  const [annonceData, setAnnonceData] = useState(null);

  useEffect(() => {
    // Utilisation d'une fonction asynchrone dans useEffect pour effectuer la requête
    const fetchData = async () => {
      try {
        // Appel à getAnnonceBy
        const response = await getAnnonceBy(id);
        // Mise à jour de l'état avec les données obtenues
        setAnnonceData(response.rows.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Appel de la fonction asynchrone
    fetchData();
  }, [id]);
  
   return(
    <DashboardLayout>
        <DashboardNavbar/>
        {annonceData ? (
        <SoftBox display="block">
            <SoftBox display="flex" mb={2}>
            
            <Photo principal={annonceData.photo} z1={annonceData.photo} z2={annonceData.photo} z3={annonceData.photo}/>
            <Principal
                voiture = {annonceData.titre}
                modele = {annonceData.voiture.modele.nomModele}
                annee = {annonceData.voiture.modele.annee}
                kilometrage = {annonceData.voiture.kilometrage}
                boite = {annonceData.voiture.boiteVitesse.nomBoiteVitesse}
                energie = {annonceData.voiture.energie.nomEnergie}
                prix = {annonceData.prix}
                date = {getDate(annonceData.dateheure)}
                garantie = {'Non'}
                consommation={annonceData.voiture.consommation}
            />
            </SoftBox>
            <SoftBox display="flex" >
            {/* details ambany */}
            <Description 
                couleur={annonceData.voiture.couleur.nomCouleur}
                portes={annonceData.voiture.modele.nbrPortes}
                places={annonceData.voiture.modele.nbrPlaces}
            />
            <Equipement/>
            </SoftBox>
        </SoftBox>
        ) : (
            <p>Chargement en cours...</p>
          )}
    </DashboardLayout>
   ); 
}

export default Details_annonce;