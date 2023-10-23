const express = require("express");
const router = express.Router();
const userRoute = require("./routes/userRoute");

router.use("/user", userRoute);
router.get("/test", function (req, res) {
    res.send("test");
});

module.exports = router;