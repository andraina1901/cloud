import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SoftBox from "components/SoftBox";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import boite from "./data/boite";
import Box from "@mui/material/Box";
import MyModal from "components/MyModal/MyModal";
import { v4 as uuidv4 } from 'uuid';
import Ajout_Boite from "./ajout";
import Update_Boite from "./update";
import borders from "assets/theme/base/borders";

import masterCardLogo from "assets/images/logos/mastercard.png";
import Ajout_boite from "./ajout";
import Update_boite from "./update";

function Boite() {
  
  const { borderWidth, borderColor } = borders;
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState(boite.rows);
  const [newBoite, setNewBoite] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleDelete = (itemToDelete) => {
    const updatedCards = cards.filter((item) => item.idBoitevitesse !== itemToDelete.idBoitevitesse);
    setCards(updatedCards);
    setNewBoite(newBoite.filter((item) => item.idBoitevitesse !== itemToDelete.idBoitevitesse));

    const totalPages = Math.ceil(updatedCards.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } 
  };
  
  const handleNewBoiteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBoite = (formData) => {
    const newBoiteItem = { idBoitevitesse: uuidv4(), ...formData };
    setNewBoite([...newBoite, newBoiteItem]);
    setIsModalOpen(false);
  };
  

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [editingBoite, setEditingBoite] = useState(null);

  const handleEdit = (BoiteToEdit) => {
    setEditingBoite(BoiteToEdit);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateBoite = (formData) => {
    const updatedCards = cards.map((item) =>
      item.idBoitevitesse === editingBoite.idBoitevitesse ? { ...item, ...formData } : item
    );
    setCards(updatedCards);
    setEditingBoite(null);
    setIsUpdateModalOpen(false);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const allCards = [...cards, ...newBoite];
  const displayedCards = allCards.slice(startIndex, endIndex);
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} style={{width: '1800px'}}>
                  <Card id="delete-account" style={{width: '1200px'}}>
                    <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
                      <SoftTypography variant="h6" fontWeight="medium">
                        Liste des Boite
                      </SoftTypography>
                      <SoftButton variant="gradient" color="dark" onClick={handleNewBoiteClick}>
                        <Icon sx={{ fontWeight: "bold" }} >add</Icon>
                        &nbsp;Nouvelle Boite
                      </SoftButton>
                    </SoftBox>
                    <SoftBox p={2}>
                      <Grid container spacing={3} >
                        {displayedCards.map((item) => (
                          <Grid key={item.idBoitevitesse} item xs={12} md={4}>
                          <SoftBox
                            border={`${borderWidth[1]} solid ${borderColor}`}
                            borderRadius="lg"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            p={3}
                          >
                            <SoftBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
                            <SoftTypography variant="h6" fontWeight="medium">
                              {item.nomBoite_vitesse}
                            </SoftTypography>
                            <SoftBox ml="auto" lineHeight={0}>
                              <Tooltip title="Edit Card" placement="top"  onClick={() => handleEdit(item)} >
                                <Icon sx={{ cursor: "pointer" }} fontSize="small">
                                  edit
                                </Icon>
                              </Tooltip>
                              <Tooltip title="Delete Card" placement="top" onClick={() => handleDelete(item)}>
                                <Icon sx={{ cursor: "pointer" }} fontSize="small">
                                  delete
                                </Icon>
                              </Tooltip>
                            </SoftBox>
                          </SoftBox>
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
                    </SoftBox>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <MyModal op={isModalOpen} close={handleCloseModal} element={<Ajout_boite addBoite={handleAddBoite}/>} />
      <MyModal
        op={isUpdateModalOpen}
        close={() => {
          setIsUpdateModalOpen(false);
          setEditingBoite(null); // Réinitialisez la catégorie en cours d'édition après la fermeture du modal
        }}
        element={<Update_boite />}
      />
      <Footer />
    </DashboardLayout>
  )
}

export default Boite;
