const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


exports.Branch = sequelize.define("Branch", {
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
}, {
    tableName: 'Branch', 
    timestamps: false
});