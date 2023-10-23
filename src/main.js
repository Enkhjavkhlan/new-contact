const express = require("express");
const router = express.Router();
const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute");

router.use("/user", userRoute);
router.use("/category", categoryRoute);


module.exports = router;