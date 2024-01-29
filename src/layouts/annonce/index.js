
import BillingInformation from "./BillingInformation";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import { getAnnonce, getPending_annonce } from "./data/annonce";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SoftTypography from "components/SoftTypography";
import breakpoints from "assets/theme/base/breakpoints";

import { useState, useEffect } from "react";


function Annonce() {
  const [annonce,setAnnonce] = useEffect([]);

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }
    window.addEventListener("resize", handleTabsOrientation);

    handleTabsOrientation();
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);
  // setAnnonce(getAnnonce());
  const handleSetTabValue = (event, newValue) => {
    console.log(newValue + "  NEW VALUE");
    setTabValue(newValue);

    // Appelez la fonction appropriée en fonction de l'onglet sélectionné
    switch (newValue) {
      case 0:
        setAnnonce(getAnnonce());
        break;
      case 1:
        setAnnonce(getPending_annonce());
        break;
      case 2:
        // setAnnonce(refusedAnnonce());
        break;
      default:
        break;
    }
  };

  return (
    <DashboardLayout>
       <SoftBox position="relative">
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(30px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          position: "relative",
          mt: 5,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <SoftBox height="100%" mt={0.5} lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
                Liste des annonces
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{ background: "transparent" }}
              >
                <Tab label="Toutes"  />
                <Tab label="En attente" />
                <Tab label="Refusees"  />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </SoftBox>

      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
        <SoftBox mt={4}>
          <SoftBox my={1}>
              <Grid ml={6} mr={-12} container spacing={3} style={{width: 'calc(100% + 1000px)'}}>
                <Grid item xs={12} md={7}>
                  <BillingInformation rows={getAnnonce().rows}/>
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
