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
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography variant="h4" sx={{ marginBottom: 2 }}>
                {todo.title}
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <LocalOfferRoundedIcon sx={{ color: "#7b1fa2" }} />
            </Grid>

            <Grid item xs={2}>
              <Typography variant="p">Tags: </Typography>
            </Grid>
            <Grid item xs={9}>
              {todo.tags.map((tag) => (
                <Box
                  key={Math.random()}
                  sx={{
                    display: "inline",
                    outline: "2px solid #7b1fa2",
                    background: "#ce93d8",
                    borderRadius: 20,
                    padding: "0 .5rem",
                    textAlign: "center",
                    margin: "0.5rem .3rem",
                    color: "#7b1fa2",
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
                  Important
                </Typography>
              ) : (
                <Typography
                  variant="p"
                  sx={{ color: "#4caf50", fontWeight: 600 }}
                >
                  Not important
                </Typography>
              )}
            </Grid>

            <Grid item xs={1}>
              <InfoIcon sx={{ color: "#009688" }} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="p">
                <span style={{ color: "#009688", fontWeight: 600 }}>
                  Info:{" "}
                </span>
                {todo.description.substring(0, 80)}...
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <EventAvailableIcon sx={{ color: "#03a9f4" }} />
            </Grid>

            <Grid item xs={11}>
              <Typography variant="p">
                <span style={{ color: "#03a9f4", fontWeight: 600 }}>
                  Deadline:{" "}
                </span>
                {todo.date}
              </Typography>
            </Grid>

            <Grid item container xs={6}>
              <Button variant="contained" fullWidth>
                Done
              </Button>
            </Grid>

            <Grid item container xs={6}>
              <NavLink to={`/todo/${todo.id}`} style={{ width: "100%" }}>
                <Button variant="outlined" fullWidth>
                  Edit
                </Button>
              </NavLink>
            </Grid>
          </Grid>
        </TodoCard>
      ))}
    </>
  );
};
