import { Container, Typography } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";

import "./home.styled";

export const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/todos");

  return (
    <Container maxWidth="xl">
      {error && <Typography variant="p">{error}</Typography>}
      {isPending && <Typography variant="p">Loading...</Typography>}
      {data &&
        data.map((todo) => (
          <Typography variant="p" key={todo.id}>
            {todo.title}
          </Typography>
        ))}
    </Container>
  );
};
