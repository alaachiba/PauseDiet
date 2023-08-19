const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoId: String,
  createdAt: { type: Date, default: Date.now },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;