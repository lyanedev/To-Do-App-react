import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TodoCard = styled(Card)({
  maxWidth: 350,
  fontFamily: "Poppins",
  padding: 30,
  margin: 15,
  outline: "3px solid #7b1fa2",
  borderRadius: 25,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "rotate(3deg)",
  },
});
