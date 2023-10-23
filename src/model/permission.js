const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


exports.Permission = sequelize.define("Permission", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN,
    group_name: DataTypes.STRING,
    created_date: DataTypes.DATE
}, {
    tableName: 'Permission', 
    timestamps: false
});

exports.RolePermission = sequelize.define("Role_permission", {
    permission_id: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Permission', 
            key: 'id', 
        },
        allowNull: false
    },
    role_id: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Role', 
            key: 'id', 
        },
        allowNull: false
    },
    Visible: DataTypes.SMALLINT,
    Create_date: DataTypes.DATE,
}, {
    tableName: 'Role_permission', 
    timestamps: false
});