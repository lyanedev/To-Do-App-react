import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import "./todo.styled";
import { Box } from "@mui/system";

export const Todo = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/todos" + id;

  const { error, isPending, data } = useFetch(url);

  return (
    <Container maxWidth="xl">
      {error && <Typography variant="p">{error}</Typography>}
      {isPending && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {data && <h1>toto</h1>}
    </Container>
  );
};
