import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import burceMars from "assets/images/bruce-mars.jpg";
import SoftTypography from "components/SoftTypography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Photo from "./details/photo";
import Principal from "./details/principal";
import Description from "./details/desciption";
import Equipement from "./details/equipement";
import SoftBox from "components/SoftBox";

function Details_annonce() {
   return(
    <DashboardLayout>
        <DashboardNavbar/>
        <SoftBox display="block">
            <SoftBox display="flex" mb={2}>
            
            <Photo principal={burceMars} z1={burceMars} z2={burceMars} z3={burceMars}/>
            <Principal
                voiture = {'FORD MUSTANG'}
                modele = {'Coupe pack GT CODE A'}
                annee = {'1965'}
                kilometrage = {'135345'}
                boite = {'Manuelle'}
                energie = {'Essence'}
                prix = {'46 500'}
                date = {'12-12-12'}
                garantie = {'2'}
                consommation={'13'}
            />
            </SoftBox>
            <SoftBox display="flex" >
            {/* details ambany */}
            <Description 
                couleur={'rouge'}
                portes={'4'}
                places={'8'}
            />
            <Equipement/>
            </SoftBox>
        </SoftBox>

    </DashboardLayout>
   ); 
}

export default Details_annonce;