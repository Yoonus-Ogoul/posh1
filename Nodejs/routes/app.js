const express = require("express");
const router = express.Router();
const appController = require("../controller/app");

router.post("/app/addPayment", appController.addPayment);
router.post("/app/addImage", appController.addImage);
router.post("/app/addUser", appController.addUser);
router.get('/app/getImages',appController.getImages);
router.get('/app/sendMail',appController.sendSuccessMail);
router.get('/app/getPayments',appController.getPayments);
module.exports = router;
