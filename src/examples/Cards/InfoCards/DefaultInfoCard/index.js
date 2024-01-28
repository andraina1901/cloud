import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

function DefaultInfoCard({ image, title, description, value, onDelete, onEdit }) {
  // const handleEdit = () => {
  //   onEdit(); // Appelez la fonction onEdit passée en prop
  //   console.log("Edit:", title);
  // };

  return (
    <Card>
      <SoftBox p={2} mx={3} display="flex" justifyContent="center">
        <SoftAvatar src={image} alt={title} size="xl" variant="rounded" />
      </SoftBox>
      <SoftBox pb={2} px={2} textAlign="center" lineHeight={1.25}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SoftTypography>
        {description && (
          <SoftTypography variant="caption" color="text" fontWeight="regular">
            {description}
          </SoftTypography>
        )}
        {description && !value ? null : <Divider />}
        {value && (
          <SoftTypography variant="h5" fontWeight="medium">
            {value}
          </SoftTypography>
        )}

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
      </SoftBox>
    </Card>
  );
}

DefaultInfoCard.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onDelete: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onEdit: PropTypes.func,
};

export default DefaultInfoCard;
