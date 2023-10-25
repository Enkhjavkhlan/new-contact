const express = require("express");
const router = express.Router();
const {Category} = require("../model/category");
const {getCategory, getCategoryIndex} = require("../controller/CategoryController");

router.get("/",  getCategory);
router.get("/:id",  getCategoryIndex);

module.exports = router;