const express = require("express");
const router = express.Router();
const Video = require("../models/video");


// API endpoint to save video data
router.post("/import", async (req, res) => {
    try {
      const { title, description, videoId } = req.body;
      const video = new Video({ title, description, videoId });
      await video.save();
      res.status(201).json(video);
    } catch (error) {
      res.status(500).json({ error: "Failed to save video" });
    }
  });

  // API endpoint to fetch all videos
router.get("/get", async (req, res) => {
    try {
      const videos = await Video.find();
      res.status(200).json(videos);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch videos" });
    }
  });


  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const video = await Video.findOneAndDelete({ _id: id });
    res.send({ msg: "video deleted deleted", video });
  });

  module.exports = router;