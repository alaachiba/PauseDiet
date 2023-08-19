import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h2>Video List</h2>
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;