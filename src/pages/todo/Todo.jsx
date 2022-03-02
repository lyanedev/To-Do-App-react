import { Card, Container, Grid, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import InfoIcon from "@mui/icons-material/Info";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";

import "./todo.styled";
import { Box } from "@mui/system";

const TodoDetailedCard = styled(Card)({
  width: 1000,
  marginTop: 50,
  padding: "0 2rem 2rem 2rem",
  fontFamily: "Poppins",
  border: "4px solid rgb(50,63,84)",
  borderRadius: 25,
});

export const Todo = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const url = "http://localhost:3004/todos/" + id;

  const { error, isPending, data: todo } = useFetch(url);

  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "100%",
        height: "100vh",
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
              <ArrowBackRoundedIcon
                sx={{ color: "rgb(50,63,84)", fontSize: 40 }}
              />
            </IconButton>

            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              spacing={2}
            >
              <Grid item xs={12}>
                <Typography
                  variant="p"
                  sx={{
                    color: "rgb(50,63,84)",
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
                  <LocalOfferRoundedIcon sx={{ color: "rgb(250,189,73)" }} />
                  {todo.tags.map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        display: "inline",
                        fontSize: 20,
                        border: "2px solid rgb(250,189,73)",
                        background: "rgb(250,189,73, 0.3)",
                        borderRadius: 20,
                        padding: ".2rem 1rem",
                        textAlign: "center",
                        margin: "0.5rem .3rem",
                        color: "rgb(250,189,73)",
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Grid>
              </Grid>

              <Grid item container direction="row" justifyContent="center">
                {todo.important ? (
                  <FeedbackRoundedIcon sx={{ color: "rgb(204,90,113)" }} />
                ) : (
                  <FeedbackRoundedIcon sx={{ color: "rgb(139,191,159)" }} />
                )}
                {todo.important ? (
                  <Typography
                    variant="p"
                    sx={{ color: "rgb(204,90,113)", fontWeight: 600 }}
                  >
                    Prioritaire
                  </Typography>
                ) : (
                  <Typography
                    variant="p"
                    sx={{ color: "rgb(139,191,159)", fontWeight: 600 }}
                  >
                    Pas prioritaire
                  </Typography>
                )}
              </Grid>

              <Grid item container xs={12}>
                <Card
                  sx={{
                    width: "100%",
                    padding: 3,
                    border: "2px solid rgb(56,163,165)",
                    borderRadius: 6,
                    backgroundColor: "rgb(56,163,165, 0.3)",
                  }}
                >
                  <Typography variant="p">
                    <InfoIcon sx={{ color: "rgb(56,163,165)" }} />
                    {todo.infos}
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
