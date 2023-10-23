const express = require("express");
const router = express.Router();
const {Category} = require("../model/category");


router.get("/test",async function  (req, res) {
    const data = await Category.findAll();
    res.json(data);
});

module.exports = router;