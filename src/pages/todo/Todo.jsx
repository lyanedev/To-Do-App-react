import { Card, Container, Grid, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import InfoIcon from "@mui/icons-material/Info";

import "./todo.styled";
import { Box } from "@mui/system";

const TodoDetailedCard = styled(Card)({
  width: 1000,
  minHeight: 500,
  marginTop: 50,
  padding: 20,
  fontFamily: "Poppins",
  border: "3px solid #2196f3",
  borderRadius: 25,
});

export const Todo = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const url = "http://localhost:3000/todos/" + id;

  const { error, isPending, data: todo } = useFetch(url);

  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
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
      {todo && (
        <>
          <TodoDetailedCard>
            <IconButton
              onClick={() => navigate("/")}
              sx={{
                position: "relative",
                left: 50,
                top: 65,
              }}
            >
              <ArrowBackRoundedIcon sx={{ color: "#2196f3", fontSize: 40 }} />
            </IconButton>

            <Grid
              container
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              flexWrap="wrap"
              spacing={2}
            >
              <Grid item xs={12}>
                <Typography
                  variant="p"
                  sx={{
                    color: "#2196f3",
                    fontWeight: "600",
                    fontSize: 50,
                    textAlign: "center",
                  }}
                >
                  {todo.title}
                </Typography>
              </Grid>

              <Grid
                item
                container
                xs={12}
                direction="row"
                justifyContent="center"
              >
                <Grid item>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: 20,
                    }}
                  >
                    Tags:{" "}
                  </Typography>
                  {todo.tags.map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        display: "inline",
                        fontSize: 20,
                        border: "2px solid #1e88e5",
                        background: "#90caf9",
                        borderRadius: 20,
                        padding: ".4rem 1.5rem",
                        textAlign: "center",
                        margin: "0.5rem .3rem",
                        color: "#1e88e5",
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Grid>
              </Grid>

              <Grid item container direction="row" justifyContent="center">
                <Card
                  sx={{
                    padding: "1rem 1.5rem",
                    border: todo.important
                      ? "2px solid #f44336"
                      : "2px solid #4caf50",
                    borderRadius: 6,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {todo.important ? (
                    <FeedbackRoundedIcon sx={{ color: "#f44336" }} />
                  ) : (
                    <FeedbackRoundedIcon sx={{ color: "#4caf50" }} />
                  )}
                  {todo.important ? (
                    <Typography
                      variant="p"
                      sx={{ color: "#f44336", fontWeight: 600 }}
                    >
                      Prioritaire
                    </Typography>
                  ) : (
                    <Typography
                      variant="p"
                      sx={{ color: "#4caf50", fontWeight: 600 }}
                    >
                      Pas prioritaire
                    </Typography>
                  )}
                </Card>
              </Grid>

              <Grid item>
                <Card
                  sx={{
                    width: "100%",
                    padding: 3,
                    border: "2px solid #009688",
                    borderRadius: 6,
                    backgroundColor: "#b2dfdb",
                  }}
                >
                  <Typography variant="p">
                    <InfoIcon sx={{ color: "#009688" }} />
                    {todo.description}
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </TodoDetailedCard>
        </>
      )}
    </Container>
  );
};
