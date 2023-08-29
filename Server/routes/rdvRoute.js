const express = require("express");
const Rdv = require("../models/rdv");
const User = require("../models/user");

const router = express.Router();

router.post("/addRdv", async (req, res) => {
  console.log(req.body);
  let obj = req.body;
  const dateRdv = new Date(obj.DateDebut);
  const dateEnd = new Date(dateRdv.getTime() + 30 * 60000);
  let rd = false
  if (rd) {
    return res.send({ msg: "rdv already exists !" });
  } else {
    let newRdv = new Rdv();
    newRdv = {
      dateRdv: obj.DateDebut,
      dateEnd: dateEnd,
      typeRdv: obj.Type,
      user: obj.IdUser,
    };
    console.log(newRdv.dateEnd);
    Rdv.create(newRdv).then((result) => {
      res.send(result);
    });
  }
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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const rdv = await Rdv.findOneAndDelete({ _id: id });
  res.send({ msg: "contact deleted", rdv });
});

module.exports = router;
