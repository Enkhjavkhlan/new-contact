const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

exports.ContactNumber = sequelize.define("Contact_number", {
    PhoneNumber: {
        type:  DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Time_created: DataTypes.DATE
}, {
    tableName: 'Contact_number', 
    timestamps: false
});

exports.EmergencyNumber = sequelize.define("Emergency_number", {
    Contact_number_id: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Contact_number', 
            key: 'id', 
        },
        allowNull: false
    },
    Relation_name: DataTypes.STRING,
    Time_created: DataTypes.DATE
}, {
    tableName: 'Emergency_number', 
    timestamps: false
});