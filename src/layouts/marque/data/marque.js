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



const marque = {
  columns: [
    { name: "id", align: "left" },
    { name: "image", align: "left" },
    { name: "marque", align: "left" },
    { name: "pays", align: "left" },
  ],

  rows: [
    {
      id: '1',
      image: team2,
      marque: "mercedes",
      pays: "Madagascar",
    },
    {
      id: '2',
      image: team3,
      marque: "hyundai",
      pays: "Madagascar",
    },
    {
      id: '3',
      image: team4,
      marque: "toyota",
      pays: "Madagascar",
    },
    {
      id: '4',
      image: team2,
      marque: "mercedes",
      pays: "Madagascar",
    },
    {
      id: '5',
      image: team3,
      marque: "hyundai",
      pays: "Madagascar",
    },
    {
      id: '6',
      image: team4,
      marque: "toyota",
      pays: "Madagascar",
    },
    {
      id: '7',
      image: team2,
      marque: "mercedes",
      pays: "Madagascar",
    },
    {
      id: '8',
      image: team3,
      marque: "hyundai",
      pays: "Madagascar",
    },
    {
      id: '9',
      image: team4,
      marque: "toyota",
      pays: "Madagascar",
    },
  ],
};

export default marque;
