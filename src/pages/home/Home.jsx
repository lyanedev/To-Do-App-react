import { Box, Container, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Todoslist } from "../../components/Todoslist";
import { useFetch } from "../../hooks/useFetch";

import "./home.styled";

export const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/todos");

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {error && <Typography variant="p">{error}</Typography>}
      {isPending && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {data && <Todoslist todos={data} />}
    </Container>
  );
};
