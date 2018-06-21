import * as Controllers from "../../Controllers";
import UserRouter from "../../Routes/UsersRouter";
import {DB} from "../../DB/DB";
import {GetGroupNextId, GetNextId, GetType} from "../../Helpers/MainHelpers";
import {Group} from "../../Models/Group";
import {User} from "../../Models/User";

export function GetGroups(){
    return new Promise((resolve) => {
        const result = _GetGroups();
        resolve(result);
    });
}
function _GetGroups(){
    return DB.Groups;
}


export function AddGroup(group: any, newGroupName : string, parentId : number){
    return new Promise((resolve) => {
        let result = '';
        group.Id = GetGroupNextId(DB.Groups);
        if(parentId === -1){
            DB.Groups.push(group);
            result = DB.writeFile('Groups');
            if(result === 'succeeded')
                resolve('succeeded!!! group: ' + group.Name + ' added!!!');
            resolve('failed');
        }
        if(newGroupName === group.Name && newGroupName !== '')
            resolve('failed');
        else
            result = _AddGroup(group, newGroupName, parentId, null);
        resolve(result);
    });
}
function _AddGroup(group: any, newGroupName : string, parentId : number, parent ?: Group){
    for(let item of DB.Groups){
        if(_AddGroupItem(group, newGroupName, parentId, item, null) === 'succeeded')
            return 'succeeded!!! group: ' + group.Name + ' added!!!';
    }
    return 'failed';
}
function _AddGroupItem(group: any, newGroupName : string, parentId : number, node : Group, parent ?: Group) : string{
    if(node.Id === parentId) {
        if (node.Members.find(item => item.Name === group.Name && GetType(item) === 'group'))
            return 'failed';
        if (newGroupName !== '') {
            if (node.Members.find(item => item.Name === group.tmpMembers && GetType(item) === 'group'))
                return 'failed';
            const tmpMembers = node.Members.slice();
            node.Members = [];
            node.Members.push(group);
            let newGroup = new Group(GetGroupNextId(DB.Groups), newGroupName, tmpMembers);
            node.Members.push(newGroup);
            return DB.writeFile('Groups');
        }


        else {
            node.Members.push(group);
            return DB.writeFile('Groups');
        }
    }
    for(let item of node.Members) {
        if(GetType(item) === 'user')
            break;
        let res = _AddGroupItem(group, newGroupName, parentId, item, node);
        if(res === 'succeeded')
            return res;
    }
    return 'failed';
}

export function DeleteGroup(id: number){
    return new Promise((resolve) => {
        const result = _DeleteGroup(id);
        resolve(result);
    });
}
function _DeleteGroup(id: number){
    return 'DeleteGroup';
}


export function FlatteningGroup(id: number){
    return new Promise((resolve) => {
        const result = _FlatteningGroup(id);
        resolve(result);
    });
}
function _FlatteningGroup(id: number){
    return 'FlatteningGroup';
}






export function AddUserToExistingGroup(userName: string, parentId : number){
    return new Promise((resolve) => {
        let user = DB.Users.find(item => item.Name === userName);
        const result = _AddUserToExistingGroup(user, parentId);
        resolve(result);
    });
}
function _AddUserToExistingGroup(user: User, parentId : number){
    for(let item of DB.Groups){
        if(_AddUserToExistingGroupItem(user, item, parentId) === 'succeeded')
            return 'succeeded!!! user: ' + user.Name + ' added to group!!!';
    }
    return 'failed';
}
function _AddUserToExistingGroupItem(user: User, node : Group, parentId : number){
    if(node.Id === parentId) {
        if (node.Members.find(item => item.Name === user.Name && GetType(item) === 'user')) {
            return 'failed';
        }
        node.Members.push(user);
        return DB.writeFile('Groups');
    }
    for(let item of node.Members) {
        if(GetType(item) === 'user')
            break;
        let res = _AddUserToExistingGroupItem(user, item, parentId);
        if(res === 'succeeded')
            return res;
    }
    return 'failed';
}


export function DeleteUserFromGroup(userId : number, parentId : number){
    return new Promise((resolve) => {
        const user = DB.Users.find(item => item.Id === userId);
        const result = _DeleteUserFromGroup(user.Name, parentId);
        resolve(result);
    });
}
function _DeleteUserFromGroup(userName : string, parentId : number){
    for(let item of DB.Groups){
        if(_DeleteUserFromGroupItem(userName, parentId, item) === 'succeeded')
            return 'succeeded!!! user: ' + userName + ' deleted from group!!!';
    }
    return 'failed';
}
function _DeleteUserFromGroupItem(userName : string, parentId : number, node : Group){
    if(node.Id === parentId) {
        let index = node.Members.findIndex(item => item.Name === userName && GetType(item) === 'user');
        if (index === -1) {
            return 'failed';
        }
        node.Members.splice(index, 1);
        return DB.writeFile('Groups');
    }
    for(let item of node.Members) {
        if(GetType(item) === 'user')
            break;
        let res = _DeleteUserFromGroupItem(userName, parentId, item);
        if(res === 'succeeded')
            return res;
    }
    return 'failed';
}