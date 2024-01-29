
import CheckIcon from '@mui/icons-material/Check';
import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function Equipement() {
    return(
        <SoftBox mt={4}>
            <SoftTypography  fontWeight="bold" > Equipement </SoftTypography>
              {/* detail */}
              <Grid item xs={12} md={6} xl={4}>
                <SoftBox >
                    <SoftTypography variant="caption" color="text" style={{fontSize: '15px'}}>
                      <CheckIcon/> Couleur
                    </SoftTypography>
                    
                  </SoftBox>
                  <SoftBox >
                    <SoftTypography variant="caption" color="text" style={{fontSize: '15px'}}>
                      <CheckIcon/> Couleur
                    </SoftTypography>
                    
                  </SoftBox>
              </Grid>
          </SoftBox>
    );
}

export default Equipement;