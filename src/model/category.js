const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


const Category = sequelize.define("category", {
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Parent_id: DataTypes.SMALLINT,
    Created_user_id: DataTypes.STRING,
    Created_user_name: DataTypes.STRING,
    Visible: DataTypes.SMALLINT,
    System_date: DataTypes.DATE
}, {
    tableName: 'Category', 
    timestamps: false
});

module.exports = Category;