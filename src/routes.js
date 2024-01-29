// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import Statistiques from "layouts/statistiques";
import Categorie from "layouts/categorie";
import Marque from "layouts/marque";
import Modele from "layouts/modele";
import Energie from "layouts/energie";
import Annonce from "layouts/annonce";
import fetchData from "layouts/categorie/data/categorie";
import Equipement from "layouts/equipement";
import Boite from "layouts/boite";
import Commission from "layouts/commission";
import Utilisateur from "layouts/utilisateur";


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Statistiques",
    key: "statistiques",
    route: "/statistiques",
    icon: <Shop size="12px" />,
    component: <Statistiques />,
    noCollapse: true,
  },
  { type: "title", title: "Gestion", key: "account-pages" },
  {
    type: "collapse",
    name: "Categorie",
    key: "categorie",
    route: "/categorie",
    icon: <Office size="12px" />,
    component: <Categorie  />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Marque",
    key: "marque",
    route: "/marque",
    icon: <Office size="12px" />,
    component: <Marque/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Modele",
    key: "modele",
    route: "/modele",
    icon: <Office size="12px" />,
    component: <Modele />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Energie",
    key: "energie",
    route: "/energie",
    icon: <Office size="12px" />,
    component: <Energie/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Equipement",
    key: "equipement",
    route: "/equipement",
    icon: <Office size="12px" />,
    component: <Equipement/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Boite de vitesse",
    key: "boite",
    route: "/boite",
    icon: <Office size="12px" />,
    component: <Boite />,
    noCollapse: true,
  },
  { type: "title", title: "Annonce", key: "annonce-pages" },
  {
    type: "collapse",
    name: "Annonce",
    key: "annonce",
    route: "/annonce",
    icon: <CustomerSupport size="12px" />,
    component: <Annonce />,
    noCollapse: true,
  },
  { type: "title", title: "Parametre", key: "" },
  {
    type: "collapse",
    name: "Commission",
    key: "commission",
    route: "/commission",
    icon: <CustomerSupport size="12px" />,
    component: <Commission/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Utilisateur",
    key: "utilisateur",
    route: "/utilisateur",
    icon: <CustomerSupport size="12px" />,
    component: <Utilisateur/>,
    noCollapse: true,
  },
];

export default routes;
