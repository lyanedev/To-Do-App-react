import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AddButton = styled(Button)({
  height: 60,
  fontFamily: "Poppins",
  fontSize: 30,
  color: "#fff",
  border: "2px solid #fff",
  "&:hover": {
    backgroundColor: "#fff",
    border: "2px solid #fff",
    color: "rgb(50,63,84)",
  },
});
