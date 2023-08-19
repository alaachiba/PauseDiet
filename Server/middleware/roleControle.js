const User = require("../models/user");

const roleControle = async (req, res, next) => {
  if (req.user && req.user.role === "nutritionniste") {
    return next();
  }
  return res.status(401).send({ message: "restricted" });
};

module.exports = roleControle;
