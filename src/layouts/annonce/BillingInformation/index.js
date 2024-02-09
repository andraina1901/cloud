import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import burceMars from "assets/images/bruce-mars.jpg";

import SoftBox from "components/SoftBox";
import Bill from "../Bill";
import { getDate } from "helpers/fonction";

function BillingInformation({rows}) {
  return (
    <Card id="delete-account">
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {rows.map((item) => 
            <Bill
            key={item.idAnnonce}
            myId={item.idAnnonce}
            principal={item.photo}
            user={item.user.username}
            voiture={item.titre}
            date={getDate(item.dateheure)}
            prix={item.prix}
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
