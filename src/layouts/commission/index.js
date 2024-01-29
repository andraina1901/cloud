import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Commission() {
    return(
        <DashboardLayout>
            <DashboardNavbar/>
            <SoftBox>
                <SoftTypography>Commission</SoftTypography>
            </SoftBox>
        </DashboardLayout>

    );
}
export default Commission;