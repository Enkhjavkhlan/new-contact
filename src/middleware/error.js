const errorHandler = (err, req, res, next) => {
  console.log("errr", err.message);
  if (err.message === "jwt expired")
    res.status(401).json({
      status: "failed",
      error: "token хугацаа дууссан",
    });
  else if (err.message === "Уучлаарай тoken алга :)" )
  res.status(401).json({
    status: "failed",
    error: err.message,
  });
  else if ( err.message === "уучлаарай dealerid id олдсонгүй. :)" )
  res.status(404).json({
    status: "failed",
    error: err.message,
  });
  else
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
};
module.exports = errorHandler;



