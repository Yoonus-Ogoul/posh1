const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
  userId: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
 phone: {
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