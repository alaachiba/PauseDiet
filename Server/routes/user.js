const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const isAuth = require("../middleware/isAuth");

//register new user
router.post("/register", async (req, res) => {
  const { name, email, lastName, password, role } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    return res.send({ msg: "user already exists !" });
  }
  user = new User({
    name,
    email,
    password,
    lastName,
    role,
  });
  const salt = 10;
  let hashedPassword = await bcrypt.hash(password, salt);
  user.password = hashedPassword;
  await user.save();

  const payload = {
    id: user._id,
  };
  var token = jwt.sign(payload, "jhghsd");

  res.send({ msg: "user added with success !", user, token });
});

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.send({ msg: "user not found !" });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send({ msg: "Bad credentials !  password" });
    }
    const payload = {
      id: user._id,
    };
    var token = jwt.sign(payload, "jhghsd", { expiresIn: "1h" });
    res.send({ msg: "user logged with success !", user, token });
  } catch (error) {
    res.send({ msg: "Server error" });
  }
});

//get auth user
router.get("/user", isAuth, (req, res) => {
  res.send({ user: req.user });
});

//update user
router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOneAndUpdate(
    { _id: id },
    { $set: req.body },
    { new: true }
  );
  res.send({ msg: "User edited", user });
});

//get all users
router.get("/getallusers", async (req, res) => {
  try{
  const users = await User.find();
  res.json({msg: "Users list", users});
  }
  catch(err){
    console.log(err)
  }
})

//get all patient
router.get("/getpatients", async (req, res) => {
  const users = await User.find({ role: "patient" });
  res.json({msg: "Patients list", users});
})

//ddelete user
router.delete('/:id',async(req,res)=>{
  const {id}=req.params
  const user=await User.findOneAndDelete({_id:id})
  res.send({msg:"contact deleted",user})
  })

module.exports = router;
