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
function AddGroup(group, newGroupName, parentId) {
    return new Promise((resolve) => {
        let result = '';
        group.Id = MainHelpers_1.GetGroupNextId(DB_1.DB.Groups);
        if (parentId === '') {
            DB_1.DB.Groups.push(group);
            result = DB_1.DB.writeFile('Groups');
            if (result === 'succeeded')
                resolve('succeeded!!! group: ' + group.Name + ' added!!!');
            resolve('failed');
        }
        if (newGroupName === group.Name && newGroupName !== '')
            resolve('failed');
        else
            result = _AddGroup(group, newGroupName, parentId, null);
        resolve(result);
    });
}
exports.AddGroup = AddGroup;
function _AddGroup(group, newGroupName, parentId, parent) {
    for (let item of DB_1.DB.Groups) {
        if (_AddGroupItem(group, newGroupName, parentId, item, null) === 'succeeded')
            return 'succeeded!!! group: ' + group.Name + ' added!!!';
    }
    return 'failed';
}
function _AddGroupItem(group, newGroupName, parentId, node, parent) {
    if (node.Id === parseInt(parentId)) {
        if (node.Members.find(item => item.Name === group.Name && MainHelpers_1.GetType(item) === 'group'))
            return 'failed';
        if (newGroupName !== '') {
            if (node.Members.find(item => item.Name === group.tmpMembers && MainHelpers_1.GetType(item) === 'group'))
                return 'failed';
            const tmpMembers = node.Members.slice();
            node.Members = [];
            node.Members.push(group);
            let newGroup = new Group_1.Group(MainHelpers_1.GetGroupNextId(DB_1.DB.Groups), newGroupName, tmpMembers);
            node.Members.push(newGroup);
            return DB_1.DB.writeFile('Groups');
        }
        else {
            node.Members.push(group);
            return DB_1.DB.writeFile('Groups');
        }
    }
    for (let item of node.Members) {
        if (MainHelpers_1.GetType(item) === 'user')
            break;
        let res = _AddGroupItem(group, newGroupName, parentId, item, node);
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
function AddUserToExistingGroup(userName, parentId) {
    return new Promise((resolve) => {
        let user = DB_1.DB.Users.find(item => item.Name === userName);
        const result = _AddUserToExistingGroup(user, parentId);
        resolve(result);
    });
}
exports.AddUserToExistingGroup = AddUserToExistingGroup;
function _AddUserToExistingGroup(user, parentId) {
    for (let item of DB_1.DB.Groups) {
        if (_AddUserToExistingGroupItem(user, item, parentId) === 'succeeded')
            return 'succeeded!!! user: ' + user.Name + ' added to group!!!';
    }
    return 'failed';
}
function _AddUserToExistingGroupItem(user, node, parentId) {
    if (node.Id === parseInt(parentId)) {
        if (node.Members.find(item => item.Name === user.Name && MainHelpers_1.GetType(item) === 'user')) {
            return 'failed';
        }
        node.Members.push(user);
        return DB_1.DB.writeFile('Groups');
    }
    for (let item of node.Members) {
        if (MainHelpers_1.GetType(item) === 'user')
            break;
        let res = _AddUserToExistingGroupItem(user, item, parentId);
        if (res === 'succeeded')
            return res;
    }
    return 'failed';
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