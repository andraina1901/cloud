import React, {useEffect, useState } from "react";
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
import equipement, { addEquipement, dropEquipement, getEquipement, updateEquipement } from "./data/equipement";
import Box from "@mui/material/Box";
import MyModal from "components/MyModal/MyModal";
import { v4 as uuidv4 } from 'uuid';
import Ajout_Equipement from "./ajout";
import Update_Equipement from "./update";
import borders from "assets/theme/base/borders";

import masterCardLogo from "assets/images/logos/mastercard.png";
import Ajout_equipement from "./ajout";
import Update_equipement from "./update";

function Equipement() {
  
  const [cards, setCards] = useState([]);
  useEffect (() => {
    getEquipement().then((response)=>{
      setCards(response.rows.data);
    }).catch(error =>{
      console.log(error);
    })
  },[]);


  const { borderWidth, borderColor } = borders;
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [newEquipement, setNewEquipement] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleDelete = async (itemToDelete) => {
    await dropEquipement(itemToDelete.idEquipement);
    const updatedCards = cards.filter((item) => item.idEquipement !== itemToDelete.idEquipement);
    setCards(updatedCards);
    setNewEquipement(newEquipement.filter((item) => item.idEquipement !== itemToDelete.idEquipement));

    const totalPages = Math.ceil(updatedCards.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } 
  };
  
  const handleNewEquipementClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddEquipement = async (formData) => {
    const rep = await addEquipement(formData);
    const newEquipementItem = { id: uuidv4(), ...formData };
    setNewEquipement([...newEquipement, newEquipementItem]);
    setIsModalOpen(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [editingEquipement, setEditingEquipement] = useState(null);

  const handleEdit = (EquipementToEdit) => {
    setEditingEquipement(EquipementToEdit);
    setIsUpdateModalOpen(true);
  };


  const handleUpdateEquipement = (formData) => {
    const updatedCards = cards.map((item) => {
      // console.log(item+" eto ndrai zao");
      if (item.idEquipement === editingEquipement.idEquipement) {
         const updatedItem = updateEquipement(item.idEquipement, formData);
        return { ...updatedItem, ...formData };
      } else {  
        return item;
      }
    });
    setCards(updatedCards);
    setEditingEquipement(null);
    setIsUpdateModalOpen(false);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const allCards = [...cards, ...newEquipement];
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
                        Liste des equipements
                      </SoftTypography>
                      <SoftButton variant="gradient" color="dark" onClick={handleNewEquipementClick}>
                        <Icon sx={{ fontWeight: "bold" }} >add</Icon>
                        &nbsp;Nouvel equipement
                      </SoftButton>
                    </SoftBox>
                    <SoftBox p={2}>
                      <Grid container spacing={3} >
                        {displayedCards.map((item) => (
                          <Grid key={item.idEquipement} item xs={12} md={4}>
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
                              {item.nomEquipement}
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
      <MyModal op={isModalOpen} close={handleCloseModal} element={<Ajout_equipement addEquipement={handleAddEquipement}/>} />
      <MyModal
        op={isUpdateModalOpen}
        close={() => {
          setIsUpdateModalOpen(false);
          setEditingEquipement(null); // Réinitialisez la catégorie en cours d'édition après la fermeture du modal
        }}
        element={<Update_equipement equipement={editingEquipement} updateEquipement={handleUpdateEquipement}/>}
      />
      <Footer />
    </DashboardLayout>
  )
}

export default Equipement;
