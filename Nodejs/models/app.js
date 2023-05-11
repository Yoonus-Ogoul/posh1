const mongoose = require("mongoose");

const ImageModel = new mongoose.Schema(
  {
    imageId: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    
    },
    pri:{
      type: String,
      required: true,
      trim: true,
    }
    
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("Image", ImageModel);
module.exports = Image;
