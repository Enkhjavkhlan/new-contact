const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


exports.User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_name:{
        type:  DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    operator_code: DataTypes.STRING,
    branch_id: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Branch', 
            key: 'id', 
        },
        allowNull: true
    },
    type: DataTypes.SMALLINT,
    isDeleted: DataTypes.BOOLEAN,
    Password_changed_date: DataTypes.DATE,
    Create_date: DataTypes.DATE,
}, {
    tableName: 'User', 
    timestamps: false
});
