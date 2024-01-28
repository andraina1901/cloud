
// 
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import React from "react";
import PropTypes from "prop-types";

function MyModal({element,op,close}) {
  const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    
    return(

        <Modal open={op} onClose={close} style={{borderRadius: '5px'}}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}
            >
                {element}
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={close}
                  sx={{ position: "absolute", top: 0, right: 0 }}
                  style={{ margin: "2%" }}
                >
                <CloseIcon />
              </IconButton>
            </Box>
          </Modal>
    );
}

MyModal.propTypes = {
    op: PropTypes.bool.isRequired,
    close: PropTypes.bool.isRequired,
    element: PropTypes.func.isRequired,
  };
export default MyModal;