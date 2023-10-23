const dotenv = require("dotenv");
dotenv.config({ path: "./src/config/config.env" });
const cors = require("cors");
const express = require("express");
const errorHandler = require("./src/middleware/error");
const { corsOptions, logUrl } = require("./src/utils/index");
const mainRoute = require("./src/main");
const app = express();

app.options("*", cors());
app.use(cors(corsOptions));
app.use((req, res, next) => logUrl(req, res, next));

app.use("/api", mainRoute);
app.get("/test", function (req, res) {
    res.send("test");
});


app.use(errorHandler);
const server = app.listen(
    process.env.PORT ?? 8000,
    console.log(`port:${process.env.PORT ?? 8000} `)
);

process.on("unhandledRejection", (err, promise) => {
    console.log(`server.js error: ${err.message}`);
    server.close(() => process.exit(1));
});
