"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("../../DB/DB");
const MainHelpers_1 = require("../../Helpers/MainHelpers");
function AddUser(user) {
    return new Promise((resolve) => {
        const result = _AddUser(user);
        resolve(result);
    });
}
exports.AddUser = AddUser;
function _AddUser(user) {
    if (_UserIndexOf(DB_1.DB.Users, user.Name) === -1) {
        user.Id = MainHelpers_1.GetNextId(DB_1.DB.Users);
        DB_1.DB.Users.push(Object.assign({}, user));
        DB_1.DB.writeFile('Users');
        return 'succeeded!!! user: ' + user.Name + ' added!!!';
    }
    else
        return 'failed!!! The user is already exists!!!';
}
function DeleteUser(id) {
    return new Promise((resolve) => {
        const result = _DeleteUser(id);
        resolve(result);
    });
}
exports.DeleteUser = DeleteUser;
function _DeleteUser(id) {
    return 'DeleteUser';
}
function UpdateUser(id) {
    return new Promise((resolve) => {
        const result = _UpdateUser(id);
        resolve(result);
    });
}
exports.UpdateUser = UpdateUser;
function _UpdateUser(id) {
    return 'UpdateUser';
}
function GetUsers() {
    return new Promise((resolve) => {
        const result = _GetUsers();
        resolve(result);
    });
}
exports.GetUsers = GetUsers;
function _GetUsers() {
    return DB_1.DB.Users;
}
function GetSpecificUser(user) {
    return new Promise((resolve) => {
        const result = _GetSpecificUser(user);
        resolve(result);
    });
}
exports.GetSpecificUser = GetSpecificUser;
function _GetSpecificUser(user) {
    return DB_1.DB.Users.find(item => item.Name === user.userName && item.Password === user.userPassword);
}
function _UserIndexOf(userArray, userName) {
    for (var i = 0; i < userArray.length; i++) {
        if (userArray[i].Name === userName) {
            return i;
        }
    }
    return -1;
}
//# sourceMappingURL=UsersService.js.map