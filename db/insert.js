const dotenv = require("dotenv");
dotenv.config({ path: "../src/config/config.env" });
const { DataTypes } = require('sequelize');
const sequelize = require('../src/config/sequelize');
const {User} = require('../src/model/user');
const {Category, CallCenterCategoryId, CategoryRelation, Categorykind } = require('../src/model/category');
const {ContactNumber, EmergencyNumber} = require('../src/model/contact');
const {CallHistory} = require('../src/model/registration');
const {Role, UserRole} = require('../src/model/role');
const {Permission, RolePermission} = require('../src/model/permission');
const {NewIdea} = require('../src/model/newIdea');
const {Branch} = require('../src/model/branch');

const resetFunction = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connection  successfully.');
        for(let i=1; i<11; i++){
            Category.create({
                id: i,
                name: `Cat ${i}`,
                description: `Desc ${i}`,
                parent_id: 1,
                auth_user_created: null,
                isDeleted: false,
                Create_date: '2023-07-07 12:12:12:123'
            })
            for(let j=1; j<=10; j++)
                Category.create({
                    id: i * 10 +j,
                    name: `Cat ${i}.${j}`,
                    description: `Desc ${i}.${j}`,
                    parent_id: i,
                    auth_user_created: null,
                    isDeleted: false,
                    Create_date: '2023-07-07 12:12:12:123'
                })
        }
    }catch(e){
        console.log('Connection error', e.message);
    }
}

resetFunction();