import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SoftBox from "components/SoftBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import marque from "./data/marque";
import Box from "@mui/material/Box";
import MyModal from "components/MyModal/MyModal";
import Ajout_marque from "./ajout";
import Update_marque from "./update";
import { v4 as uuidv4 } from 'uuid';



function Marque() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState(marque.rows);
  const [newMarque, setNewMarque] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleDelete = (itemToDelete) => {
    const updatedCards = cards.filter((item) => item.id !== itemToDelete.id);
    setCards(updatedCards);
    setNewMarque(newMarque.filter((item) => item.id !== itemToDelete.id));

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
      item.id === editingMarque.id ? { ...item, ...formData } : item
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
                      image={item.image}
                      title={item.marque}
                      description={item.pays}
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
