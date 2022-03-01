import { useState, useRef } from "react";

import "./add.styled";

import React from "react";
import Grid from "@mui/material/Grid";
import {
  TextField,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
  Box,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";

export const Add = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([]);
  const [infos, setInfos] = useState("");
  const [date, setDate] = useState(null);
  const tagInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, priority, infos);
  };

  const handleAddTag = () => {
    const tag = newTag.trim();
    if (tag && !tags.includes(tag)) {
      setTags((prevTags) => [...prevTags, newTag]);
    }
    setNewTag("");
    tagInput.current.focus();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
              required
            />
          </Grid>

          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <TextField
                placeholder="ex: Dev"
                label="Tags"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalOfferRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                fullWidth
                required
                inputRef={tagInput}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                fullWidth
                sx={{ height: "100%" }}
                onClick={() => handleAddTag()}
              >
                Ajouter tag
              </Button>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant="p">
              Tags:{" "}
              {tags.map((tag) => (
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
            </Typography>
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <InfoOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              required
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

          <Grid item>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              Ajouter
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
