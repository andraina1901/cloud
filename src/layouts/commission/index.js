import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/Tables/Table";
import commission from "./data/commission";
import { Button, TextField, Typography } from "@mui/material";
import SoftButton from "components/SoftButton";

function Commission() {
    
  const { columns, rows } = commission;
    return(
        <DashboardLayout>
            <DashboardNavbar/>
            <SoftBox>
                    <form>
                        
                        <SoftTypography fontWeight="bold" style={{fontSize: '20px'}}>Modifier de la commission</SoftTypography>
                        <SoftBox mb={3}  display="flex" style={{gap: '5%'}}>
                            <SoftBox>
                                <SoftTypography style={{fontSize: '13px'}}>Commission</SoftTypography>
                                <TextField type="text" />
                            </SoftBox>
                            <SoftBox>
                                <SoftTypography style={{fontSize: '13px'}}>Date</SoftTypography>
                                <TextField type="date" />
                            </SoftBox>
                            <SoftBox mt={3}>
                                <SoftButton variant="gradient" color="dark" >
                                &nbsp;Modifier
                                </SoftButton>
                            </SoftBox>
                        </SoftBox>
                    </form>
                <SoftBox>
                    <Table columns={columns} rows={rows}/>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>

    );
}
export default Commission;