const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


exports.Role = sequelize.define("Role", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN,
    time_created: DataTypes.DATE,
}, {
    tableName: 'Role', 
    timestamps: false
});

exports.UserRole = sequelize.define("User_role", {
    role_id: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Role', 
            key: 'id', 
        },
        allowNull: false
    },
    user_id: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'User', 
            key: 'id', 
        },
        allowNull: false
    },
    Visible: DataTypes.SMALLINT,
    Create_date: DataTypes.DATE,
}, {
    tableName: 'User_role', 
    timestamps: false
});