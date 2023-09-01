import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { Container, Typography, Grid } from "@mui/material";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from the backend API
    axios
      .get("/api/videos/get")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error.response.data);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Video List
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {videos.map((video) => (
          <Grid item xs={12} key={video._id}>
            <Typography variant="h5" component="h3">
              {video.title}
            </Typography>
            <YouTube videoId={video.videoId} />
            <Typography variant="body2">{video.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default VideoList;
