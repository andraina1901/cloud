import PropTypes from "prop-types";

import { Routes, useNavigate } from 'react-router-dom';

import SoftAvatar from "components/SoftAvatar";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import burceMars from "assets/images/bruce-mars.jpg";
import { Button } from "@mui/material";
import details from "../details";

function Bill({ name, company, email, vat, noGutter }) {
  const navigate = useNavigate();
  const id = 0;

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <SoftBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor="grey-100"
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <SoftBox width="100%" display="flex" flexDirection="row">
            <SoftBox mr={10}>
              <SoftAvatar  style={{width: '150px',height: '100px'}} src={burceMars} alt="profile-image" variant="rounded" size="xl" shadow="sm"/>
            </SoftBox>

            <SoftBox mb={1} mr={50} lineHeight={0}>
              <SoftBox mb={2}>
                <SoftTypography variant="caption" color="text">
                  {/* Utilisateur:&nbsp;&nbsp;&nbsp; */}
                  <SoftTypography  style={{ fontSize: '16px' }} variant="caption" fontWeight="medium" textTransform="capitalize">
                    {/* {company} */}Jeremia
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="caption" color="text">
                  Voiture:&nbsp;&nbsp;&nbsp;
                  <SoftTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                    {company}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="caption" color="text">
                  Date:&nbsp;&nbsp;&nbsp;
                  <SoftTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                    {company}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1}>
                <SoftTypography variant="caption" color="text">
                  Prix:&nbsp;&nbsp;&nbsp;
                  <SoftTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                    {company}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
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

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Bill;
