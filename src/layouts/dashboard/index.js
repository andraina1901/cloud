
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

import Projects from "layouts/dashboard/components/Projects";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { getStatAnnonce, getStatBestVente, getStatCommission, getStatUser, getStatVente } from "./data/ministat";
import { useEffect, useState } from "react";

function Dashboard() {
  // const { size } = typography;
  // const { chart, items } = reportsBarChartData;

  const [cards, setCards] = useState([]);
  useEffect (() => {
    getStatVente().then((response)=>{
      setCards(response.totalvente);
    }).catch(error =>{
      console.log(error);
    })
  },[]);

  const [users, setUsers] = useState([]);
  useEffect (() => {
    getStatUser().then((response)=>{
      setUsers(response.nombre_inscrits);
    }).catch(error =>{
      console.log(error);
    })
  },[]);

  const [annonce, setAnnonce] = useState([]);
  useEffect (() => {
    getStatAnnonce().then((response)=>{
      setAnnonce(response.nombre);
    }).catch(error =>{
      console.log(error);
    })
  },[]);

  const [commi, setCommi] = useState([]);
  useEffect (() => {
    getStatCommission().then((response)=>{
      setCommi(response.benefice);
    }).catch(error =>{
      console.log(error);
    })
  },[]);



  return (
    
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Prix de vente cette semaine" }}
                count={cards+" MGA"}
                percentage={{ color: "success", text: "" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "utilisateurs cette semaine" }}
                count={users+" inscrits"}
                percentage={{ color: "success", text: "" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Annonces cette semaine" }}
                count={annonce+ " ajoutes"}
                percentage={{ color: "error", text: "" }}
                icon={{ color: "info", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Commission du semaine" }}
                count={commi+" MGA"}
                percentage={{ color: "success", text: "" }}
                icon={{
                  color: "info",
                  component: "shopping_cart",
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid> */}
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
