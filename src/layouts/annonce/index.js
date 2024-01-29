
import BillingInformation from "./BillingInformation";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import Header from "./components/Header/index";
import SoftAvatar from "components/SoftAvatar";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";



function Annonce() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          
        <SoftBox mt={4}>
          <SoftBox my={1}>
              <Grid ml={6} mr={-12} container spacing={3} style={{width: 'calc(100% + 1000px)'}}>
                <Grid item xs={12} md={7}>
                  <BillingInformation />
                </Grid>
              </Grid>
          </SoftBox>
        </SoftBox>
        </Grid>
      </SoftBox>
      <Footer/>
      </DashboardLayout>
  );
}

export default Annonce;
