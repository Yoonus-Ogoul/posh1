const mongoose = require("mongoose");

const PaymentModel = new mongoose.Schema(
  {
    Username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    Email: {
      type: String,
      required: true,
      trim: true,
    },
    Address: {
      type: String,
      required: true,
      trim: true,
    
    },
    PaymentID :{
        type: String,
        required: true,
        trim: true,
       
    }
   
    
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", PaymentModel);
module.exports = Payment;