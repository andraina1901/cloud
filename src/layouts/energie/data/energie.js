/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";



const energie = {
  columns: [
    { name: "id", align: "left" },
    { name: "energie", align: "left" },
  ],

  rows: [
    {
      id: '1',
      energie: "diesel",
    },
    {
      id: '2',
      energie: "hyundai",
    },
    {
      id: '3',
      energie: "toyota",
    },
  ],
};

export default energie;
