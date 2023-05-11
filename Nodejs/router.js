const express = require("express");
const appRouter = require("./routes/app");
const router = express.Router();
router.use("/", appRouter);
module.exports = router;