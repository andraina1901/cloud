
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
import Header from "./components/Header";


function Annonce() {
  const [cards, setCards] = useState([]);
  useEffect (() => {
    getAnnonce().then((response)=>{
      setCards(response.rows.data);
    }).catch(error =>{
      console.log(error);
    })
  },[]);


  return (
    <DashboardLayout>
      <Header/>
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
        <SoftBox mt={4}>
          <SoftBox my={1}>
              <Grid ml={6} mr={-12} container spacing={3} style={{width: 'calc(100% + 1000px)'}}>
                <Grid item xs={12} md={7}>
                  <BillingInformation rows={cards}/>
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

