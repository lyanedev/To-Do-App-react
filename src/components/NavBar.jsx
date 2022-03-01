import { useNavigate } from "react-router-dom";

import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

import { AddButton } from "./navBar.styled";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#03a9f4",
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
                color: "#b3e5fc",
                fontWeight: "500",
              }}
            >
              by lyanedev( )
            </span>
          </Typography>
          <AddButton
            variant="outlined"
            startIcon={<AddCircleOutlineRoundedIcon />}
          >
            Ajouter
          </AddButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
