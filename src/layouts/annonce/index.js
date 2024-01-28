import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SoftBox from "components/SoftBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import annonce from "./data/annonce";
import Box from "@mui/material/Box";
import MyModal from "components/MyModal/MyModal";
import Ajout_annonce from "./ajout";
import BillingInformation from "./BillingInformation";


function Annonce() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox my={3}>
            <Grid container spacing={3} style={{    width: 'calc(100% + 800px)'}}>
              <Grid item xs={12} md={7}>
                <BillingInformation />
              </Grid>
            </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Annonce;
