import React, { useState , useEffect} from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import modele, { addModel, dropModel, getModel } from "./data/modele";
import Box from "@mui/material/Box";
import MyModal from "components/MyModal/MyModal";
import Ajout_modele from "./ajout";
// Soft UI Dashboard React examples
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Images
import team1 from "assets/images/team-1.jpg";
// 
import SoftTypography from "components/SoftTypography";
import Update_modele from "./update";

function Modele() {

  const [cards, setCards] = useState([]);
  useEffect (() => {
    getModel().then((response)=>{
      setCards(response.rows.data);
    }).catch(error =>{
      console.log(error);
    })
  },[]);


  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [newModel, setNewModel] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleDelete = (itemToDelete) => {
    dropModel(itemToDelete.idModele);
    const updatedCards = cards.filter((item) => item.idModele !== itemToDelete.idModele);
    setCards(updatedCards);
    setNewModel(newModel.filter((item) => item.idModele !== itemToDelete.idModele));
    const totalPages = Math.ceil(updatedCards.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } 
  };
  

  const handleNewModelClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddModel = async (formData) => {
    const rep = await addModel(formData);

    // const newModeleItem = { id: uuidv4(), ...rep };
    setNewModel([...newModel, rep]);
    setIsModalOpen(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

    
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [editingModele, setEditingModele] = useState(null);

  const handleEdit = (ModeleToEdit) => {
    setEditingModele(ModeleToEdit);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateModele = (formData) => {
    const updatedCards = cards.map((item) =>
      item.idModele === editingModele.idModele ? { ...item, ...formData } : item
    );
    setCards(updatedCards);
    setEditingModele(null);
    setIsUpdateModalOpen(false);
  };


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const allCards = [...cards, ...newModel];
  
  const displayedCards = allCards.slice(startIndex, endIndex);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={2}>
        <Button
              variant="contained"
              style={{ backgroundColor: "#4CAF50", color: "white", marginRight: '20px' }}
              onClick={handleNewModelClick}
            >
              Nouveau Model
            </Button>
          </SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Liste des models
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            <Grid container spacing={5}>
              {displayedCards.map((item) => (
                <Grid key={item.idModele} item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={item.photo}
                    modele={item.nomModele}
                    marque={item.marque.nomMarque}
                    categorie={item.categorie.nomCategorie}
                    annee={item.annee}
                    place={item.nbrPlaces}
                    porte={item.nbrPortes}
                    onDelete={() => handleDelete(item)}
                    onEdit={() => handleEdit(item)}
                  />
                </Grid>
              ))}
            </Grid>
            {cards.length > itemsPerPage && (
                <Box mt={2}>
                  {Array.from({ length: Math.ceil(cards.length / itemsPerPage) }).map((_, index) => (
                    <Button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      variant={currentPage === index + 1 ? "contained" : "outlined"}
                      style={{marginTop:'20px',marginBottom:'20px',  marginRight: '15px',color:'black',padding:'0px' }}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </Box>
              )}
          </SoftBox>
        </Card>
      </SoftBox>
      </SoftBox>

      <MyModal op={isModalOpen} close={handleCloseModal}  element={<Ajout_modele addModel={handleAddModel}/>} />
      <MyModal
        op={isUpdateModalOpen}
        close={() => {
          setIsUpdateModalOpen(false);
          setEditingModele(null);
        }}
        element={<Update_modele modele={editingModele} updatemodele={handleUpdateModele} />}
      />
      <Footer />
    </DashboardLayout>
  );
}

export default Modele;
