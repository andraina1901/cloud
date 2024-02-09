import PropTypes from "prop-types";

import { Routes, useNavigate } from 'react-router-dom';

import SoftAvatar from "components/SoftAvatar";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import { validerAnnonce } from "../data/annonce";
import { useState } from "react";

function Bill({myId,principal,user,voiture,date,prix}) {
  const navigate = useNavigate();
  const [validationDone, setValidationDone] = useState(false);
  const handleClick = () => {
    navigate(`/detail/${myId}`);
  };

  const handleValider  = () => {
    validerAnnonce(myId).then((response)=>{
      setValidationDone(true); 
    }).catch((error)=>{
    })
  }

  return (
    <SoftBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor="grey-100"
      borderRadius="lg"
      p={3}
      // mb={noGutter ? 0 : 1}
      mt={2}
    >
      <SoftBox width="100%" display="flex" flexDirection="row">
            <SoftBox mr={10}>
              <SoftAvatar  style={{width: '150px',height: '100px'}} src={principal} alt="profile-image" variant="rounded" size="xl" shadow="sm"/>
            </SoftBox>

            <SoftBox mb={1} mr={50} lineHeight={0}>
              <SoftBox mb={2}>
                <SoftTypography variant="caption" color="text">
                  {/* Utilisateur:&nbsp;&nbsp;&nbsp; */}
                  <SoftTypography  style={{ fontSize: '16px' }} variant="caption" fontWeight="medium" textTransform="capitalize">
                    {user}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="caption" color="text">
                  Voiture:&nbsp;&nbsp;&nbsp;
                  <SoftTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                    {voiture}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="caption" color="text">
                  Date:&nbsp;&nbsp;&nbsp;
                  <SoftTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                    {date}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="caption" color="text">
                  Prix:&nbsp;&nbsp;&nbsp;
                  <SoftTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                    {prix} ar
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </SoftBox>
            <SoftBox mt={4}>
          <SoftButton variant={validationDone ? "success" : "gradient"} color={validationDone ? "green" : "dark"} onClick={handleValider} disabled={validationDone}>
            &nbsp;{validationDone ? 'Validé' : 'Valider'}
          </SoftButton>
        </SoftBox>

              <SoftBox mt={4}>
                
                <SoftButton variant="gradient" color="dark" onClick={handleClick}>
                  &nbsp;Voir details
                </SoftButton>
              </SoftBox>
            </SoftBox>

        </SoftBox>
  );
}


// Typechecking props for the Bill
Bill.propTypes = {
  key: PropTypes.string.isRequired,
  myId: PropTypes.string.isRequired,
  principal: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  voiture: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  prix: PropTypes.string.isRequired,
  // noGutter: PropTypes.bool,
};

export default Bill;
