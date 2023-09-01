import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, TextareaAutosize, Container, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddVideoForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoId: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/videos/import", formData);
      console.log("Video added:", response.data);
      navigate("/Nutritionniste-dash/video-list")
    } catch (error) {
      console.error("Error adding video:", error.response.data);
      // You can add code here to show an error message to the user.
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Add Video
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          fullWidth
          variant="outlined"
          margin="normal"
          value={formData.title}
          onChange={handleChange}
        />

        <TextareaAutosize
          label="Description"
          name="description"
          fullWidth
          minRows={3}
          maxRows={5}
          placeholder="Description"
          variant="outlined"
          margin="normal"
          value={formData.description}
          onChange={handleChange}
        />

        <TextField
          label="YouTube Video ID"
          name="videoId"
          fullWidth
          variant="outlined"
          margin="normal"
          value={formData.videoId}
          onChange={handleChange}
        />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              onClick={() => {
                navigate(`/Nutritionniste-dash/video-list`);
              }}
              fullWidth
            >
              Video List
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddVideoForm;
