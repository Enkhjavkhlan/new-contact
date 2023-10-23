const asyncHandler = require("express-async-handler");

exports.getCategory = asyncHandler(async (req, res, next) => {
    res.status(200).json({
      data: "data",
    });
  });