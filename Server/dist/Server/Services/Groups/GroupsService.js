"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("../../DB/DB");
function GetGroups() {
    return new Promise((resolve) => {
        const result = _GetGroups();
        resolve(result);
    });
}
exports.GetGroups = GetGroups;
function _GetGroups() {
    return DB_1.DB.Groups;
}
function AddGroup(user) {
    return new Promise((resolve) => {
        const result = _AddGroup(user);
        resolve(result);
    });
}
exports.AddGroup = AddGroup;
function _AddGroup(user) {
    return 'AddGroup';
}
function DeleteGroup(id) {
    return new Promise((resolve) => {
        const result = _DeleteGroup(id);
        resolve(result);
    });
}
exports.DeleteGroup = DeleteGroup;
function _DeleteGroup(id) {
    return 'DeleteGroup';
}
function FlatteningGroup(id) {
    return new Promise((resolve) => {
        const result = _FlatteningGroup(id);
        resolve(result);
    });
}
exports.FlatteningGroup = FlatteningGroup;
function _FlatteningGroup(id) {
    return 'FlatteningGroup';
}
function AddUserToExistingGroup(user, groupId) {
    return new Promise((resolve) => {
        const result = _AddUserToExistingGroup(user, groupId);
        resolve(result);
    });
}
exports.AddUserToExistingGroup = AddUserToExistingGroup;
function _AddUserToExistingGroup(user, groupId) {
    return 'AddUserToExistingGroup';
}
function DeleteUserFromGroup(userId, groupId) {
    return new Promise((resolve) => {
        const result = _DeleteUserFromGroup(userId, groupId);
        resolve(result);
    });
}
exports.DeleteUserFromGroup = DeleteUserFromGroup;
function _DeleteUserFromGroup(userId, groupId) {
    return 'DeleteUserFromGroup';
}
function AddNewGroupToGroup(groupId, group) {
    return new Promise((resolve) => {
        const result = _AddNewGroupToGroup(groupId, group);
        resolve(result);
    });
}
exports.AddNewGroupToGroup = AddNewGroupToGroup;
function _AddNewGroupToGroup(groupId, group) {
    return 'AddNewGroupToGroup';
}
//# sourceMappingURL=GroupsService.js.map