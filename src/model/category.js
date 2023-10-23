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
    registration_id:DataTypes.INTEGER,
    type: DataTypes.SMALLINT,
    category_id: {
        type:  DataTypes.INTEGER,
        references: {
            model: 'Category', 
            key: 'id', 
        },
        allowNull: false
    },
    create_time: DataTypes.DATE
}, {
    tableName: 'Registration_category_id', 
    timestamps: false
});

exports.CategoryRelation = sequelize.define("Category_relation", {
    category_one:DataTypes.STRING,
    category_two:DataTypes.STRING,
    relate_type:DataTypes.STRING,
}, {
    tableName: 'Category_relation', 
    timestamps: false
});

exports.Categorykind = sequelize.define("Category_kind", {
    name:DataTypes.STRING,
    description:DataTypes.STRING,
}, {
    tableName: 'Category_kind', 
    timestamps: false
});

