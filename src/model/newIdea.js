const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


exports.NewIdea = sequelize.define("New_idea", {
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Worker_id: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'User', 
            key: 'id',
        },
        allowNull: false
    },
    Create_time: DataTypes.DATE,
}, {
    tableName: 'New_idea', 
    timestamps: false
});