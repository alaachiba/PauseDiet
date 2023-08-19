const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  image: {
    type: String
  },
  role: {
    type: String,
    enum: ["patient", "nutritionniste", "secretaire"],
  },
  rdv: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rdv",
    },
  ],
});

module.exports = User = mongoose.model("users", userSchema);
