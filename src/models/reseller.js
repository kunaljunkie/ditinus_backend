const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true
     },
    email: {
         type: String, 
         required: true 
        },
    headline: {
         type: String, 
         required: true 
        },
    tagline: { 
        type: String, 
        required: true
     },
    bodytext: { 
        type: String, 
        required: true 
    },
    logoUrl: { 
        type: String, 
        required: true 
    },
    primaryColor: { 
        type: String, 
        required: true 
    },
    secondaryColor: { 
        type: String 
    },
    website: { 
        type: String 
    },
    brandimg: { 
        type: String 
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("reseller", userSchema);
