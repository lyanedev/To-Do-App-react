import { useNavigate } from "react-router-dom";

import {
  styled,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

import "./navBar.styled";

const AddButton = styled(Button)({
  height: 60,
  fontFamily: "Poppins",
  fontSize: 30,
  color: "#fff",
  border: "2px solid #fff",
  "&:hover": {
    backgroundColor: "#fff",
    border: "2px solid #fff",
    color: "blue",
  },
});

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
