"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("../../DB/DB");
function AddUser(user) {
    return new Promise((resolve) => {
        const result = _AddUser(user);
        resolve(result);
    });
}
exports.AddUser = AddUser;
function _AddUser(user) {
    return 'AddUser';
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
//# sourceMappingURL=UsersService.js.map