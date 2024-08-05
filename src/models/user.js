const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    reseller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reseller",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
