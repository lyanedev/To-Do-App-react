import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./add.styled";
import { useFetch } from "../../hooks/useFetch";

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
  const tagInput = useRef(null);

  const navigate = useNavigate();

  const { postData, data, error } = useFetch(
    "http://localhost:3004/todos",
    "POST"
  );

  const handleSubmit = () => {
    postData({ title, priority, tags, infos });
  };

  useEffect(() => {
    if (data) {
      handleSubmit();
      navigate("/");
    }
  }, [data, navigate]);

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
                color: "rgb(50,63,84)",
                fontWeight: 600,
                fontSize: 30,
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
                    <TaskAltIcon sx={{ color: "rgb(50,63,84)" }} />
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
            <Grid item xs={7}>
              <TextField
                placeholder="ex: Dev"
                label="Tags"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalOfferRoundedIcon
                        sx={{ color: "rgb(255,192,73)" }}
                      />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                fullWidth
                inputRef={tagInput}
              />
            </Grid>
            <Grid item xs={5}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  height: "100%",
                  color: "rgb(255,192,73)",
                  border: "2px solid rgb(255,192,73)",
                  "&:hover": {
                    backgroundColor: "rgb(250,189,73, 0.3)",
                    border: "2px solid rgb(255,192,73)",
                  },
                }}
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
                    <InfoOutlinedIcon sx={{ color: "rgb(56,163,165)" }} />
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
              sx={{
                backgroundColor: "rgb(46,56,78)",
                border: "2px solid rgb(46,56,78)",
                "&:hover": {
                  backgroundColor: "#364359",
                },
              }}
            >
              Ajouter
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
