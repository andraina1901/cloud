
import Card from "@mui/material/Card";
// @mui material components
import Grid from "@mui/material/Grid";
import Table from "examples/Tables/Table";

import React, { useEffect, useState } from "react";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";


// Data
import reportsBarChartData from "layouts/statistiques/data/reportsBarChartData";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";

// Data
import voituresTableData from "./data/voituresTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import gradientLineChartData, { anotherLineChartData } from "./data/gradientLineChartData";


function Statistiques() {
  const { columns, rows } = voituresTableData;
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <VerticalBarChart
                title="Prix de vente et commission"
                height="300px"
                chart={gradientLineChartData()}
                style={{height:'400px'}}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Utilisateurs et annnonces"
                height="20.25rem"
                chart={anotherLineChartData()}
              />
            </Grid>
          </Grid>
        </SoftBox>

        <SoftBox mb={3}>
    <Card>
    <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
      <SoftTypography variant="h6" style={{width: '800px'}}>Les plus vendus selon</SoftTypography>

      {/* Ajoutez le composant Select ici */}
      
      <Select
        value={selectedValue}
        onChange={handleSelectChange}
        style={{ width: "10px", marginRight: "10px" ,marginLeft: "700px"}} // Ajoutez des styles ici
      >
        <MenuItem value="option1">Categorie</MenuItem>
        <MenuItem value="option2">Marque</MenuItem>
        <MenuItem value="option3">Model</MenuItem>
      </Select>
    </SoftBox>
    <SoftBox
      sx={{
        "& .MuiTableRow-root:not(:last-child)": {
          "& td": {
            borderBottom: ({ borders: { borderWidth, borderColor } }) =>
              `${borderWidth[1]} solid ${borderColor}`,
          },
        },
      }}    
    >
      <Table columns={columns} rows={rows} />
    </SoftBox>
  </Card>

</SoftBox>


      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Statistiques;
