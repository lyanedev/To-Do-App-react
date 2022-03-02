import { NavLink } from "react-router-dom";

import { Typography, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import InfoIcon from "@mui/icons-material/Info";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";

import { TodoCard } from "./todosList.styled";

export const Todoslist = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoCard key={todo.id}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  marginBottom: 2,
                  color: "rgb(50,63,84)",
                  fontWeight: "600",
                }}
              >
                {todo.title}
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <LocalOfferRoundedIcon sx={{ color: "rgb(250,189,73)" }} />
            </Grid>

            <Grid item xs={11}>
              {todo.tags.map((tag) => (
                <Box
                  key={tag}
                  sx={{
                    display: "inline",
                    border: "2px solid rgb(250,189,73)",
                    background: "rgb(250,189,73, 0.3)",
                    borderRadius: 20,
                    padding: ".2rem .5rem",
                    textAlign: "center",
                    margin: "0.5rem .3rem",
                    color: "rgb(250,189,73)",
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Grid>

            <Grid item xs={1}>
              {todo.priority ? (
                <FeedbackRoundedIcon sx={{ color: "#CC5A71" }} />
              ) : (
                <FeedbackRoundedIcon sx={{ color: "#8BBF9F" }} />
              )}
            </Grid>
            <Grid item xs={11}>
              {todo.priority ? (
                <Typography
                  variant="p"
                  sx={{ color: "#CC5A71", fontWeight: 600 }}
                >
                  Prioritaire
                </Typography>
              ) : (
                <Typography
                  variant="p"
                  sx={{ color: "#8BBF9F", fontWeight: 600 }}
                >
                  Pas prioritaire
                </Typography>
              )}
            </Grid>

            <Grid item xs={1}>
              <InfoIcon sx={{ color: "#38A3A5" }} />
            </Grid>
            <Grid
              item
              xs={11}
              sx={{
                marginBottom: 2,
              }}
            >
              <Typography variant="p">
                <span style={{ color: "#38A3A5", fontWeight: 600 }}>
                  Infos:{" "}
                </span>
                {todo.infos.substring(0, 80)}...
              </Typography>
            </Grid>

            <Grid item container xs={6}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "#fff",
                  border: "2px solid #C44536",
                  color: "#C5283D",
                  "&:hover": {
                    border: "2px solid #C44536",
                    color: "#fff",
                    backgroundColor: "#C44536",
                  },
                }}
              >
                Supprimer
              </Button>
            </Grid>

            <Grid item container xs={6}>
              <NavLink to={`/todos/${todo.id}`} style={{ width: "100%" }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgb(50,63,84)",
                    "&:hover": {
                      backgroundColor: "#364359",
                    },
                  }}
                >
                  Détails
                </Button>
              </NavLink>
            </Grid>
          </Grid>
        </TodoCard>
      ))}
    </>
  );
};
