// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import SoftAvatar from "components/SoftAvatar";
import modele from "layouts/modele/data/modele";

import Button from "@mui/material/Button";

function DefaultProjectCard({ image, categorie, marque, modele, annee, place, porte,onDelete,onEdit}) {
  
  // const handleEdit = () => {
  //   console.log("Edit:", title);
  // };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <SoftBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          src={image}
          component="img"
          marque={marque}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </SoftBox>
      <SoftBox pt={3} px={0.5}>
        <SoftBox mb={1}>
          <SoftTypography
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            textGradient
          >
            {categorie} - {marque}
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={1}>
            <SoftTypography
              variant="h5"
              textTransform="capitalize"
            >
              {modele} ({annee})
            </SoftTypography>
        </SoftBox>
        <SoftBox mb={1} lineHeight={0}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            - {place} places
          </SoftTypography>
        </SoftBox>
        
        <SoftBox mb={1} lineHeight={0}>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            - {porte} portes
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox display="flex" justifyContent="space-between" mt={2}>
          <Button
            variant="contained"
            style={{ backgroundColor: '#3498db', color: '#fff', marginLeft: '20px' }}
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#f44336", color: "white", marginRight: '20px' }}
            onClick={onDelete}
          >
            Delete
          </Button>
        </SoftBox> 
    </Card>
  );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: [],
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  annee:PropTypes.string.isRequired,
  place:PropTypes.string.isRequired,
  porte:PropTypes.string.isRequired,
  onDelete: PropTypes.func, 
  onEdit: PropTypes.func, 
};

export default DefaultProjectCard;
