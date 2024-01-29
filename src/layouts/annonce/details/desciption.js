import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function Description({couleur,places,portes}) {
    return(
        <SoftBox mt={4} mr={50}>
            
            <SoftTypography  fontWeight="bold" > Description </SoftTypography>
              {/* detail */}
              <Grid item xs={12} md={6} xl={4}>
              <SoftBox >
                  <SoftTypography variant="caption" color="text" style={{fontSize: '15px'}}>
                    Couleur:&nbsp;&nbsp;&nbsp;
                    <SoftTypography variant="caption" style={{fontSize: '15px'}} fontWeight="medium" textTransform="capitalize">
                      {couleur}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>

                <SoftBox>
                  <SoftTypography variant="caption" color="text" style={{fontSize: '15px'}}>
                    Places:&nbsp;&nbsp;&nbsp;
                    <SoftTypography variant="caption" style={{fontSize: '15px'}} fontWeight="medium" textTransform="capitalize">
                    {places}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
                <SoftBox>
                  <SoftTypography variant="caption" color="text" style={{fontSize: '15px'}}>
                    Portes:&nbsp;&nbsp;&nbsp;
                    <SoftTypography variant="caption" style={{fontSize: '15px'}} fontWeight="medium" textTransform="capitalize">
                    {portes}
                    </SoftTypography>
                  </SoftTypography>
                </SoftBox>
            </Grid>
          </SoftBox>
    );
}

Description.propTypes ={
    couleur: PropTypes.string.isRequired,
    places: PropTypes.string.isRequired,
    portes: PropTypes.string.isRequired,
}

export default Description;