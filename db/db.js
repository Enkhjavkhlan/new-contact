const dotenv = require("dotenv");
dotenv.config({ path: "../src/config/config.env" });
const { DataTypes } = require('sequelize');
const sequelize = require('../src/config/sequelize');
const {User} = require('../src/model/user');
const {Category, CallCenterCategoryId} = require('../src/model/category');
const {ContactNumber, EmergencyNumber} = require('../src/model/contact');
const {RegistrationCare, RegistrationCallCenter} = require('../src/model/registration');
const {Role, UserRole} = require('../src/model/role');
const {Permission, RolePermission} = require('../src/model/permission');
const {NewIdea} = require('../src/model/newIdea');
const {Branch} = require('../src/model/branch');

const resetFunction = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connection  successfully.');
        await sequelize.sync({force:true});
        await Branch.sync({force: true});
        await User.sync({force: true});
        await Category.sync({force: true});
        await ContactNumber.sync({force: true});
        await EmergencyNumber.sync({force: true});
        await RegistrationCare.sync({force: true});
        await RegistrationCallCenter.sync({force: true});
        await CallCenterCategoryId.sync({force: true});
        await Role.sync({force: true});
        await UserRole.sync({force: true});
        await Permission.sync({force: true});
        await RolePermission.sync({force: true});
        await NewIdea.sync({force: true});
    }catch(e){
        console.log('Conn error', e.message);
    }
}

resetFunction();