const Image  = require("../models/app");
const User = require("../models/User");
const Payment= require("../models/Payment")
const sendUserEmail =  require("../sendgrid/sendmail");

const addPayment = async (req, res) => {
  try {
    console.log("I am body", req.body);
    const app = new Payment(req.body);
    sendUserEmail("user",req.body);
    sendUserEmail("admin","myounes@ogoul.com")
    app.PaymentId = Date.now();
    await app.save();
    return res.status(200).send({ app });
  } catch (error) {
    // console.log(error)
    return res.status(400).send({ error });
  }
};
const getPayments = async (req, res) => {
  try {
    const PaymentModel = req.params.PaymentId;
    const Payments = await Payment.find({});

    return res.status(200).send({ Payments });
  } catch (error) {
    console.log(error)
    return res.status(400).send({ message: "failed " });
  }
};
const addImage = async (req, res) => {
  try {
    console.log("I am body", req.body);
    const app = new Image(req.body);
    app.imageId = Date.now();
    await app.save();
    return res.status(200).send({ app });
  } catch (error) {
    // console.log(error)
    return res.status(400).send({ error });
  }
};
const addUser = async (req, res) => {
  try {
    console.log("I am body", req.body);
    const app = new User(req.body);
    sendUserEmail(req.body);
    app.userId = Date.now();
    await app.save();
    return res.status(200).send({ app });
  } catch (error) {
    // console.log(error)
    return res.status(400).send({ error });
  }
};
const getImages = async (req, res) => {
  try {
    const ImageModel = req.params.imageId;
    const images = await Image.find({});

    return res.status(200).send({ images });
  } catch (error) {
    console.log(error)
    return res.status(400).send({ message: "failed " });
  }
};


const sendSuccessMail = async (req, res) => {
  try {
    sendUserEmail();
    return res.status(200).send({ message:true });
  } catch (error) {
    console.log(error)
    return res.status(400).send({ message: "failed " });
  }
};
module.exports = { addImage ,getImages,sendSuccessMail, addUser,addPayment,getPayments};
