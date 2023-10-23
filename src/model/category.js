const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


exports.Category = sequelize.define("category", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    parent_id: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Category', 
            key: 'id', 
        },
        allowNull: true
    },
    auth_user_created: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'User', 
            key: 'id', 
        },
        allowNull: true
    },
    isDeleted: DataTypes.BOOLEAN,
    Create_date: DataTypes.DATE
}, {
    tableName: 'Category', 
    timestamps: false
});


exports.CallCenterCategoryId = sequelize.define("Registration_category_id", {
    Registration_id:DataTypes.INTEGER,
    Type: DataTypes.SMALLINT,
    Category_id: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Category', 
            key: 'id', 
        },
        allowNull: false
    },
    Create_time: DataTypes.DATE
}, {
    tableName: 'Registration_category_id', 
    timestamps: false
});
