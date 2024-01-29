import React, { useState,useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SoftBox from "components/SoftBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { dropMarque, getMarque } from "./data/marque";
import Box from "@mui/material/Box";
import MyModal from "components/MyModal/MyModal";
import Ajout_marque from "./ajout";
import Update_marque from "./update";
import { v4 as uuidv4 } from 'uuid';



function Marque() {
  const [cards, setCards] = useState([]);
  useEffect (() => {
    getMarque().then((response)=>{
      setCards(response.rows.data);
    }).catch(error =>{
      console.log(error);
    })
  },[]);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  // const [cards, setCards] = useState(marque.rows);
  const [newMarque, setNewMarque] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleDelete = async (itemToDelete) => {
    await dropMarque(itemToDelete.idMarque);
    const updatedCards = cards.filter((item) => item.idMarque !== itemToDelete.idMarque);
    setCards(updatedCards);
    setNewMarque(newMarque.filter((item) => item.idMarque !== itemToDelete.idMarque));

    const totalPages = Math.ceil(updatedCards.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } 
  };
  
  const handleNewMarqueClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddMarque = (formData) => {
    const newMarqueItem = { id: uuidv4(), ...formData };
    setNewMarque([...newMarque, newMarqueItem]);
    setIsModalOpen(false);

  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [editingMarque, setEditingMarque] = useState(null);

  const handleEdit = (MarqueToEdit) => {
    setEditingMarque(MarqueToEdit);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateMarque = (formData) => {
    const updatedCards = cards.map((item) =>
      item.idMarque === editingMarque.id ? { ...item, ...formData } : item
    );
    setCards(updatedCards);
    setEditingMarque(null);
    setIsUpdateModalOpen(false);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const allCards = [...cards, ...newMarque];
  const displayedCards = allCards.slice(startIndex, endIndex);
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={1.5}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#4CAF50", color: "white", marginRight: '20px' }}
            onClick={handleNewMarqueClick}
          >
            Nouvelle Marque
          </Button>

          <Grid container spacing={5} style={{ width: '1500px', margin: '0px' }}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={5}>
                {displayedCards.map((item) => (
                  <Grid key={item.id} item xs={12} md={6} xl={4}>
                    <DefaultInfoCard
                      image={item.photo}
                      title={item.nomMarque}
                      description={item.paysMarque.nomPays}
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
                      style={{ marginRight: '5px',color:'black' }}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </Box>
              )}
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>

      <MyModal op={isModalOpen} close={handleCloseModal} element={<Ajout_marque addMarque={handleAddMarque} />} />
      <MyModal
        op={isUpdateModalOpen}
        close={() => {
          setIsUpdateModalOpen(false);
          setEditingMarque(null); // Réinitialisez la catégorie en cours d'édition après la fermeture du modal
        }}
        element={<Update_marque marque={editingMarque} updateMarque={handleUpdateMarque} />}
      />
      <Footer />
    </DashboardLayout>
  );
}

export default Marque;
