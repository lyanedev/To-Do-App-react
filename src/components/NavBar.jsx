import { useNavigate } from "react-router-dom";

import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

import { AddButton } from "./navBar.styled";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="primary">
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
            ToDo App
          </Typography>
          <AddButton
            variant="outlined"
            startIcon={<AddCircleOutlineRoundedIcon />}
          >
            Add
          </AddButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
