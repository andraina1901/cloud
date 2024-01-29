// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Bill from "../Bill";

// Billing page components

function BillingInformation() {
  return (
    <Card id="delete-account">
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default BillingInformation;
