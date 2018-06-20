"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("../../DB/DB");
const MainHelpers_1 = require("../../Helpers/MainHelpers");
const Group_1 = require("../../Models/Group");
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
function AddGroup(group, newGroupName, id) {
    return new Promise((resolve) => {
        let result = '';
        group.Id = MainHelpers_1.GetNextId(DB_1.DB.Groups);
        if (id === '') {
            DB_1.DB.Groups.push(group);
            result = DB_1.DB.writeFile('Groups');
            if (result === 'succeeded')
                result = 'succeeded!!! group: ' + group.Name + ' added!!!';
        }
        else
            result = _AddGroup(group, newGroupName, id, null);
        resolve(result);
    });
}
exports.AddGroup = AddGroup;
function _AddGroup(group, newGroupName, id, parent) {
    for (let item of DB_1.DB.Groups) {
        if (_AddGroupItem(group, newGroupName, id, item, null) === 'succeeded')
            return 'succeeded!!! group: ' + group.Name + ' added!!!';
    }
    return 'failed';
}
function _AddGroupItem(group, newGroupName, id, node, parent) {
    if (node.Id === parseInt(id)) {
        if (newGroupName !== '') {
            let newGroup = new Group_1.Group(MainHelpers_1.GetGroupNextId(DB_1.DB.Groups), newGroupName, node.Members.slice());
            node.Members = [];
            node.Members.push(group);
            node.Members.push(newGroup);
            return DB_1.DB.writeFile('Groups');
        }
        else {
            if (node.Members.find(item => item.Name === group.Name && MainHelpers_1.GetType(item) === 'group')) {
                return 'failed';
            }
            node.Members.push(group);
            return DB_1.DB.writeFile('Groups');
        }
    }
    for (let item of node.Members) {
        if (MainHelpers_1.GetType(item) === 'user')
            break;
        let res = _AddGroupItem(group, newGroupName, id, item, node);
        if (res === 'succeeded')
            return res;
    }
    return 'failed';
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
//# sourceMappingURL=GroupsService.js.map