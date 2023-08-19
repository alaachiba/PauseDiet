const mongoose = require("mongoose");
const schema = mongoose.Schema;

const rdvSchema = new schema({
    dateRdv: {
        type: Date,
      },
    dateEnd: {
        type: Date,
    },
    typeRdv: {
        type: String,
        enum: ["Contrôle", "Consultation"],
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
});

module.exports = Rdv = mongoose.model("rdv", rdvSchema);
