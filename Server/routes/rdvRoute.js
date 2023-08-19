const express = require("express");
const Rdv = require("../models/rdv");
const User = require("../models/user")

const router = express.Router();

router.post("/addRdv", async (req, res) => {
  const { dateRdv, dateEnd, typeRdv } = req.body;
  let rd = await Rdv.findOne({ dateRdv });
  if (rd) {
    return res.send({ msg: "rdv already exists !" });
  }
  const newRdv = new Rdv({ dateRdv, dateEnd, typeRdv });
  const rdv = await newRdv.save();
  res.send({ msg: "rdv added", rdv });
});


//get all users
router.get("/getrdvs", async (req, res) => {
    try {
      const rdvs = await Rdv.find();
      res.json({ msg: "Rdvs list", rdvs });
    } catch (err) {
      console.log(err);
    }
  });


  router.post("/:userId/rdv", async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const { dateRdv, dateEnd, typeRdv } = req.body;
      const rdv = new Rdv({ dateRdv, dateEnd, typeRdv, user: user._id });
      await rdv.save();
  
      user.rdv.push(rdv._id);
      await user.save();
  
      res.status(201).json(rdv);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

module.exports=router