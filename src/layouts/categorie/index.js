// Soft UI Dashboard React examples
import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import borders from "assets/theme/base/borders";
import masterCardLogo from "assets/images/logos/mastercard.png";
import MyModal from "components/MyModal/MyModal";
import Ajout_categorie from "./ajout";
import Update_categorie from "./update";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from 'uuid';
import { useEffect} from "react";
import PropTypes from "prop-types";
import { getCategorie } from "./data/categorie";

function Categorie() {
  const [cards, setCards] = useState([]);
  useEffect (() => {
    getCategorie().then((response)=>{
      setCards(response.rows);
    }).catch(error =>{
      console.log(error);
    })
  },[]);
  const { borderWidth, borderColor } = borders;
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const [newCategorie, setNewCategorie] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleDelete = (itemToDelete) => {
    const updatedCards = cards.filter((item) => item.idCategorie !== itemToDelete.idCategorie);
    setCards(updatedCards);
    setNewCategorie(newCategorie.filter((item) => item.idCategorie !== itemToDelete.idCategorie));

    const totalPages = Math.ceil(updatedCards.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } 
  };
  
  const handleNewCategorieClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddCategorie = (formData) => {
    const newCategorieItem = { id: uuidv4(), ...formData };
    setNewCategorie([...newCategorie, newCategorieItem]);
    setIsModalOpen(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [editingCategorie, setEditingCategorie] = useState(null);

  const handleEdit = (CategorieToEdit) => {
    setEditingCategorie(CategorieToEdit);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateCategorie = (formData) => {
    const updatedCards = cards.map((item) =>
      item.idCategorie === editingCategorie.id ? { ...item, ...formData } : item
    );
    setCards(updatedCards);
    setEditingCategorie(null);
    setIsUpdateModalOpen(false);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const allCards = [...cards, ...newCategorie];
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
                        Liste des categories
                      </SoftTypography>
                      <SoftButton variant="gradient" color="dark" onClick={handleNewCategorieClick}>
                        <Icon sx={{ fontWeight: "bold" }} >add</Icon>
                        &nbsp;Nouvelle categorie
                      </SoftButton>
                    </SoftBox>
                    <SoftBox p={2}>
                      <Grid container spacing={3} >
                        {displayedCards.map((item) => (
                          <Grid key={item.idCategorie} item xs={12} md={4}>
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
                              {item.nomCategorie}
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

      <MyModal op={isModalOpen} close={handleCloseModal} element={<Ajout_categorie addCategorie={handleAddCategorie}/>} />
      <MyModal
        op={isUpdateModalOpen}
        close={() => {
          setIsUpdateModalOpen(false);
          setEditingCategorie(null); 
         }}
        element={<Update_categorie category={editingCategorie} updateCategorie={handleUpdateCategorie} />}
      />
      <Footer />
    </DashboardLayout>
  )  

}

export default Categorie;
