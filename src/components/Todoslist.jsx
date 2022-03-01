import { NavLink } from "react-router-dom";

import { Typography, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import InfoIcon from "@mui/icons-material/Info";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
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
                sx={{ marginBottom: 2, color: "#2196f3", fontWeight: "600" }}
              >
                {todo.title}
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <LocalOfferRoundedIcon sx={{ color: "#1e88e5" }} />
            </Grid>

            <Grid item xs={2}>
              <Typography variant="p">Tags: </Typography>
            </Grid>
            <Grid item xs={9}>
              {todo.tags.map((tag) => (
                <Box
                  key={tag}
                  sx={{
                    display: "inline",
                    border: "2px solid #1e88e5",
                    background: "#90caf9",
                    borderRadius: 20,
                    padding: ".2rem .5rem",
                    textAlign: "center",
                    margin: "0.5rem .3rem",
                    color: "#1e88e5",
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Grid>

            <Grid item xs={1}>
              {todo.important ? (
                <FeedbackRoundedIcon sx={{ color: "#f44336" }} />
              ) : (
                <FeedbackRoundedIcon sx={{ color: "#4caf50" }} />
              )}
            </Grid>
            <Grid item xs={11}>
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
            </Grid>

            <Grid item xs={1}>
              <InfoIcon sx={{ color: "#009688" }} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="p">
                <span style={{ color: "#009688", fontWeight: 600 }}>
                  Infos:{" "}
                </span>
                {todo.description.substring(0, 80)}...
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <EventAvailableIcon sx={{ color: "#ef5350" }} />
            </Grid>

            <Grid item xs={11}>
              <Typography variant="p">
                <span style={{ color: "#ef5350", fontWeight: 600 }}>
                  Date limite:{" "}
                </span>
                {todo.date}
              </Typography>
            </Grid>

            <Grid item container xs={6}>
              <Button variant="contained" fullWidth>
                Supprimer
              </Button>
            </Grid>

            <Grid item container xs={6}>
              <NavLink to={`/todos/${todo.id}`} style={{ width: "100%" }}>
                <Button variant="outlined" fullWidth>
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
