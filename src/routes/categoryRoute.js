const express = require("express");
const router = express.Router();
const {Category} = require("../model/category");
const {getCategory} = require("../controller/CategoryController");

router.get("/test",  getCategory);

module.exports = router;