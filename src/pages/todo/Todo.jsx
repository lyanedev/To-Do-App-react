import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./todo.styled";

export const Todo = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/todos" + id;

  const { error, isPending, data } = useFetch(url);

  return (
    <Container maxWidth="xl">
      {error && <Typography variant="p">{error}</Typography>}
      {isPending && <Typography variant="p">Loading...</Typography>}
      {data && "toto"}
    </Container>
  );
};
