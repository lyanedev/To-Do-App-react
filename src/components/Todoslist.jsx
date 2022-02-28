import { NavLink } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Card, Typography, Button, Grid } from "@mui/material";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import SentimentDissatisfiedRoundedIcon from "@mui/icons-material/SentimentDissatisfiedRounded";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";

import "./todosList.styled";
import { Box } from "@mui/system";

const TodoCard = styled(Card)({
  maxWidth: 350,
  fontFamily: "Poppins",
  padding: 30,
  margin: 15,
  outline: "3px solid #7b1fa2",
  borderRadius: 25,
});

export const Todoslist = ({ todos }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5,
      }}
    >
      {todos.map((todo) => (
        <TodoCard key={todo.id}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            rowSpacing={2}
          >
            <Grid item>
              <Typography variant="h4">{todo.title}</Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Typography variant="p">Tags: </Typography>
              {todo.tags.map((tag) => (
                <Box
                  sx={{
                    display: "inline-box",
                    outline: "2px solid #7b1fa2",
                    background: "#ce93d8",
                    borderRadius: 20,
                    padding: "0.1rem 0.5rem",
                    textAlign: "center",
                    margin: "0.5rem .3rem",
                    color: "#7b1fa2",
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Grid>

            {todo.important && (
              <>
                <Grid item xs={1}>
                  <ErrorRoundedIcon sx={{ color: "#f44336" }} />
                </Grid>
                <Grid item xs={11}>
                  <Typography variant="p" sx={{ color: "#f44336" }}>
                    Important
                  </Typography>
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <Typography variant="p">
                {todo.description.substring(0, 60)}...
              </Typography>
            </Grid>

            <Grid>
              <NavLink to={`/todos/${todo.id}`}>
                <Button variant="text">See more</Button>
              </NavLink>
            </Grid>
          </Grid>
        </TodoCard>
      ))}
    </Box>
  );
};
