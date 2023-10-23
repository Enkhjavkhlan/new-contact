const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.POSTGRE_DATABASE, process.env.POSTGRE_USERNAME, process.env.POSTGRE_PASSWORD, {
    host: process.env.POSTGRE_HOST,
    dialect: 'postgres',
});
module.exports = sequelize;
