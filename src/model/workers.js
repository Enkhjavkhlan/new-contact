const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


const Workers = sequelize.define("workers", {
    First_name: DataTypes.STRING,
    Last_name: DataTypes.STRING,
    User_name:{
        type:  DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Password: DataTypes.STRING,
    Operator_code: DataTypes.STRING,
    Department: DataTypes.STRING,
    Type: DataTypes.SMALLINT,
    Visible: DataTypes.SMALLINT,
    Password_changed_date: DataTypes.DATE,
    System_date: DataTypes.DATE,
}, {
    tableName: 'Workers', 
    timestamps: false
});

module.exports = Workers;