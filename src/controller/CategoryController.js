const asyncHandler = require("express-async-handler");
const {Category} = require("../model/category")

exports.getCategory = asyncHandler(async (req, res, next) => {
  data = await Category.findAll();res.status(200).json(data);
});

exports.getCategoryIndex = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const data = await Category.findAll({where: { parent_id: id != '0' ? id : null }})
  res.status(200).json(data);
});