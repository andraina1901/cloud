import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function Principal({voiture,modele,annee,kilometrage,boite,energie,prix,date,garantie,consommation}) {
    return (
        <SoftBox mt={6}>
            {/* detail */}
            <Grid item xs={12} md={6} xl={4}>
                <SoftTypography  fontWeight="bold" >{voiture} </SoftTypography>
                <SoftTypography mb={1}>{modele}</SoftTypography>
                <SoftTypography style={{fontSize: '15px'}}>{annee} | {kilometrage} km | {boite} | {energie}</SoftTypography>
            
                <SoftBox>
                    <SoftTypography variant="caption" color="text" style={{fontSize: '15px'}}>
                    Consommation:&nbsp;&nbsp;&nbsp;
                    <SoftTypography variant="caption" style={{fontSize: '15px'}} fontWeight="medium" textTransform="capitalize">
                        {consommation} L/100
                    </SoftTypography>
                    </SoftTypography>
                </SoftBox>

                <SoftBox >
                    <SoftTypography variant="caption" color="text" style={{fontSize: '15px'}}>
                    Prix:&nbsp;&nbsp;&nbsp;
                    <SoftTypography variant="caption" style={{fontSize: '15px'}} fontWeight="medium" textTransform="capitalize">
                        {prix}
                    </SoftTypography>
                    </SoftTypography>
                </SoftBox>

              <SoftBox>
                <SoftTypography variant="caption" color="text" style={{fontSize: '15px'}}>
                  Date:&nbsp;&nbsp;&nbsp;
                  <SoftTypography variant="caption" style={{fontSize: '15px'}} fontWeight="medium" textTransform="capitalize">
                    {date}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              
              <SoftBox>
                <SoftTypography variant="caption" color="text" style={{fontSize: '15px'}}>
                  Garantie:&nbsp;&nbsp;&nbsp;
                  <SoftTypography variant="caption" style={{fontSize: '15px'}} fontWeight="medium" textTransform="capitalize">
                    {garantie}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
          </Grid>
          </SoftBox>
    );
}
Principal.propTypes = {
    voiture: PropTypes.string.isRequired,
    modele: PropTypes.string.isRequired,
    annee: PropTypes.string.isRequired,
    kilometrage: PropTypes.string.isRequired,
    boite: PropTypes.string.isRequired,
    energie: PropTypes.string.isRequired,
    prix: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    garantie: PropTypes.string.isRequired,
    consommation: PropTypes.string.isRequired,
}


export default Principal;
