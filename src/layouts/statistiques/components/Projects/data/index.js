// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (prix) =>
    prix.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "voiture", align: "left" },
      { name: "prix", align: "left" },
      { name: "commission", align: "center" },
      { name: "date", align: "center" },
    ],

    rows: [
      {
        voiture: [logoXD, "Soft UI XD Version"],
        prix: "2000",
        commission: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </SoftTypography>
        ),
        date: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={60} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        voiture: [logoAtlassian, "Add Progress Track"],
        prix: "4000",
        commission: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </SoftTypography>
        ),
        date: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={10} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        voiture: [logoSlack, "Fix Platform Errors"],
        prix: "3000",
        commission: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Not set
          </SoftTypography>
        ),
        date: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        voiture: [logoSpotify, "Launch our Mobile App"],
        prix: "4000",
        commission: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </SoftTypography>
        ),
        date: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
    ],
  };
}
