import { useState } from "react";

import "./add.styled";

import React from "react";
import Grid from "@mui/material/Grid";
import {
  TextField,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export const Add = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(false);
  const [tags, setTags] = useState([]);
  const [infos, setInfos] = useState("");
  const [date, setDate] = useState(null);

  console.log(title, priority, infos);

  return (
    <>
      <form>
        <Grid container direction="column" justifyContent="center" spacing={2}>
          <Grid item>
            <Typography
              variant="p"
              sx={{
                color: "#2196f3",
                fontWeight: 600,
              }}
            >
              Ajouter tâche
            </Typography>
          </Grid>

          <Grid item>
            <TextField
              placeholder="ex: Coder 🚀"
              label="Titre"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TaskAltIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              fullWidth
            />
          </Grid>

          <Grid item>
            <TextField
              label="Infos"
              multiline
              rows={3}
              placeholder="ex: Terminer de coder mon projet ToDo App 😤"
              fullWidth
              onChange={(e) => setInfos(e.target.value)}
              value={infos}
            />
          </Grid>

          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={priority}
                  onChange={() => setPriority(!priority)}
                  inputProps={{ "aria-label": "controlled" }}
                  label="Priorité"
                />
              }
              label="Priorité"
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
};
