import React, { useState } from "react";
import axios from "axios";

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
      // You can add code here to show a success message or redirect to a different page.
    } catch (error) {
      console.error("Error adding video:", error.response.data);
      // You can add code here to show an error message to the user.
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" name="title" onChange={handleChange} value={formData.title} />

      <label>Description:</label>
      <textarea name="description" onChange={handleChange} value={formData.description} />

      <label>YouTube Video ID:</label>
      <input type="text" name="videoId" onChange={handleChange} value={formData.videoId} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddVideoForm;