import { Container, Typography } from "@mui/material";
import { Todoslist } from "../../components/Todoslist";
import { useFetch } from "../../hooks/useFetch";

import "./home.styled";

export const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/todos");

  return (
    <Container maxWidth="xl">
      {error && <Typography variant="p">{error}</Typography>}
      {isPending && <Typography variant="p">Loading...</Typography>}
      {data && <Todoslist todos={data}/>}
    </Container>
  );
};
