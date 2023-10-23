
exports.corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    callback(null, true);
  },
};

exports.logUrl = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.hostname}:${process.env.PORT}${req.originalUrl}`
  );
  next();
};
