import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import burceMars from "assets/images/bruce-mars.jpg";

import SoftBox from "components/SoftBox";
import Bill from "../Bill";

function BillingInformation({rows}) {
  return (
    <Card id="delete-account">
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {rows.map((item) =>
            <Bill
            key={item.id}
            principal={burceMars}
            user={'Jeremia'}
            voiture={'Mustang coop code A'}
            date={'20-01-2022'}
            prix={'20.000'}
          />
          )}
          
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

BillingInformation.propTypes={
  rows: PropTypes.string.isRequired,
}

export default BillingInformation;
