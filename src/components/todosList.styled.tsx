import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TodoCard = styled(Card)({
  maxWidth: 350,
  fontFamily: "Poppins",
  padding: 30,
  margin: 15,
  border: "4px solid rgb(50,63,84)",
  borderRadius: 25,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
  },
});
