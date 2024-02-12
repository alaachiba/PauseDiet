// const express = require('express');
// const multer = require('multer');
// const fs = require("fs")
// const User = require("../models/user")

// const path = require('path');

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, './uploads/');
//   },
//   filename(req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// const router = express.Router();

// router.post('/', upload.single('image'), (req, res) => {
//   res.send(`./${req.file.path}`);
// });

// router.get('/images/:userId', async (req, res) => {
//   const { userId } = req.params;

//   try {
//     // Find the user by their ID
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).send('User not found');
//     }

//     // Check if the user has an image
//     if (!user.image) {
//       return res.status(404).send('User does not have an image');
//     }

//     const filePath = path.join(__dirname, 'uploads', user.image);

//     // Check if the file exists
//     if (fs.existsSync(filePath)) {
//       // Serve the file
//       res.sendFile(filePath);
//     } else {
//       // File not found
//       res.status(404).send('Image not found');
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal server error');
//   }
// });

// module.exports = router;
// const express = require('express');
// const multer = require('multer');
// const fs = require("fs")
// const User = require("../models/user")

// const path = require('path');
// const { log } = require('console');

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, './uploads/');
//   },
//   filename(req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// const router = express.Router();

// router.post('/', upload.single('image'), (req, res) => {
//   res.send(`./uploads/${req.file.filename}`); // Adjusted path format
// });

// router.get('/images/:userId', async (req, res) => {
//   const { userId } = req.params;

//   try {
//     // Find the user by their ID
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).send('User not found');
//     }

//     // Check if the user has an image
//     if (!user.image) {
//       return res.status(404).send('User does not have an image');
//     }

//     const normalizedPath = path.normalize(user.image); // Normalize the stored path
//     const filePath = path.join(__dirname, normalizedPath);
//     console.log("path: ", filePath)

//     // Check if the file exists
//     if (fs.existsSync(filePath)) {
//       // Serve the file
//       res.sendFile(filePath);
//     } else {
//       // File not found
//       res.status(404).send('Image not found');
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal server error');
//   }
// });

// module.exports = router;

const express = require("express");
const multer = require("multer");
const fs = require("fs");
const User = require("../models/user");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send(`/uploads/${req.file.filename}`);
});

router.get("/images/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    if (!user.image) {
      return res.status(404).send("User does not have an image");
    }

    const normalizedPath = path.normalize(user.image);
    const filePath = path.join(__dirname, "..", normalizedPath);

    console.log("User Image Path:", user.image);
    console.log("Normalized Path:", normalizedPath);
    console.log("Full File Path:", filePath);

    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send("Image not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

router.get("/test-image", (req, res) => {
  const testFilePath = path.join(
    __dirname,
    "..",
    "uploads",
    "1691140790778.jpg"
  );
  res.sendFile(testFilePath);
});

module.exports = router;
