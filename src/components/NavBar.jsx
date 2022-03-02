import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { styled } from "@mui/material/styles";

import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

import { AddButton } from "./navBar.styled";

import { Add } from "../components/add/Add";

const CustomBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  minHeight: 400,
  padding: 20,
  background: "#fff",
  border: "4px solid rgb(50,63,84)",
  boxShadow: 24,
  borderRadius: 25,
  fontFamily: "Poppins",
});

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgb(50,63,84)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            variant="h2"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "800",
              color: "#fff",
              padding: "1rem 0",
              flex: 1,
              cursor: "pointer",
            }}
          >
            todo app
            <span
              style={{
                fontSize: 20,
                marginLeft: 10,
                color: "rgb(255,192,73)",
                fontWeight: "500",
              }}
            >
              by lyanedev( )
            </span>
          </Typography>
          <AddButton
            onClick={handleOpen}
            variant="outlined"
            startIcon={<AddCircleOutlineRoundedIcon />}
          >
            Ajouter
          </AddButton>

          {/* Modal */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <CustomBox>
              <Add />
            </CustomBox>
          </Modal>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
