"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetUsers() {
    return new Promise((resolve) => {
        const result = _GetUsers();
        resolve(result);
    });
}
exports.GetUsers = GetUsers;
function _GetUsers() {
    return 'GetUsers';
}
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
//# sourceMappingURL=UsersService.js.map