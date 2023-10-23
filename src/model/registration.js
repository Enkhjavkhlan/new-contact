const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


exports.CallHistory = sequelize.define("Call_History", {
    number_host: DataTypes.STRING,
    number_client: DataTypes.STRING,
    call_kind: DataTypes.STRING,
    email: DataTypes.STRING,
    auth_user: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'User', 
            key: 'id', 
        },
        allowNull: false
    },
    emergency_number_id1: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Emergency_number', 
            key: 'id', 
        },
        allowNull: true
    },
    emergency_number_id2: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Emergency_number', 
            key: 'id', 
        },
        allowNull: true
    },
    description: DataTypes.STRING,
    type: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN,
    category_root: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Category', 
            key: 'id', 
        },
        allowNull: true
    },
    category: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Category', 
            key: 'id', 
        },
        allowNull: true
    },
    branch_id: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Branch', 
            key: 'id', 
        },
        allowNull: true
    },
    old_auth_user_id: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'User', 
            key: 'id', 
        },
        allowNull: true
    },
    deleted_date: DataTypes.DATE,
    time_created: DataTypes.DATE,
}, {
    tableName: 'Call_History', 
    timestamps: false
});
