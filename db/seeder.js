const dotenv = require("dotenv");
dotenv.config({ path: "../src/config/config.env" });
const Workers = require('../src/model/workers');
const Category = require('../src/model/category');
const resetFunction = () => {
    Workers.sync({force: true});
    Category.sync({force: true});
}
resetFunction();