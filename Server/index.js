const express = require("express");
const path = require("path")
const connectDB = require("./config/connectDB");
const app = express();
app.use(express.json());
connectDB();
const port = 5000;
app.use("/rdv", require("./routes/rdvRoute"));
app.use("/userAuth", require("./routes/user"));
app.use("/api/uploads", require("./routes/uploadRoute"));
app.use("/api/videos", require ("./routes/videos"));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
app.listen(5000, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${port}`);
});
