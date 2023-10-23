const dotenv = require("dotenv");
dotenv.config({ path: "./src/config/config.env" });
const Workers = require('./src/model/workers');

// Workers.sync({force: true});
// Workers.create({First_name: "firstName", User_name: "first_name"})