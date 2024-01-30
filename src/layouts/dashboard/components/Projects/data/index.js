// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

// Images
// import logo from "assets/images/small-logos/logo-xd.svg";
import logo from "assets/images/logo-ct.png";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { getStatBestVente } from "layouts/dashboard/data/ministat";
import { useEffect, useState } from "react";

export default function data() {

  const [best, setBest] = useState([]);
  useEffect (() => {
    getStatBestVente().then((response)=>{
      response.map((item)=>{
        item.nommodele = [logo,item.nommodele]
      })
      setBest(response);
    }).catch(error =>{
      console.log(error);
    })
  },[]);


// const [rows, columns] = best;
  const boucle =0;
  return {
    columns: [
      { name: "nommodele", align: "left" },
      { name: "username", align: "left" },
      { name: "prix", align: "center" },
      { name: "rank_num", align: "center" },
    ],

    rows: best
  };
}
