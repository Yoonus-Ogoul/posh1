const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
  userId: {
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
  email: {
    type: String,
    required: true,
    trim: true,
  },
 address: {
    type: String,
    required: true,
    trim: true,
  },
},    
{
  timestamps: true,
}
);

const User = mongoose.model("User", userModel);
module.exports = User;