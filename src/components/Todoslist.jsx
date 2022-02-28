import { NavLink } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Card, Typography, Button, Grid } from "@mui/material";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

import "./todosList.styled";

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
    <>
      {todos.map((todo) => (
        <TodoCard key={todo.id}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              <Typography variant="h4">{todo.title}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="p">Tags: {todo.tags}</Typography>
            </Grid>
            <Grid item xs={1}>
              {todo.important && <ErrorRoundedIcon sx={{ color: "#f44336" }} />}
            </Grid>
            <Grid item xs={11}>
              {todo.important && (
                <Typography variant="p" sx={{ color: "#f44336" }}>
                  Important
                </Typography>
              )}
            </Grid>
            <Typography variant="p">
              {todo.done ? "Done" : "Not done"}
            </Typography>
            <Typography variant="p">
              {todo.description.substring(0, 60)}...
            </Typography>
            <NavLink to={`/todos/${todo.id}`}>
              <Button variant="outlined">See more</Button>
            </NavLink>
          </Grid>
        </TodoCard>
      ))}
    </>
  );
};
