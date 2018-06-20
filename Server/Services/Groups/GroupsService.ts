import * as Controllers from "../../Controllers";
import UserRouter from "../../Routes/UsersRouter";
import {DB} from "../../DB/DB";
import {GetGroupNextId, GetNextId, GetType} from "../../Helpers/MainHelpers";
import {Group} from "../../Models/Group";

export function GetGroups(){
    return new Promise((resolve) => {
        const result = _GetGroups();
        resolve(result);
    });
}
function _GetGroups(){
    return DB.Groups;
}


export function AddGroup(group: any, newGroupName : string, id : string){
    return new Promise((resolve) => {

        let result = '';
        group.Id = GetGroupNextId(DB.Groups);
        if(id === ''){
            DB.Groups.push(group);
            result = DB.writeFile('Groups');
            if(result === 'succeeded')
                result = 'succeeded!!! group: ' + group.Name + ' added!!!';
        }
        else
            result = _AddGroup(group, newGroupName, id, null);
        resolve(result);
    });
}
function _AddGroup(group: any, newGroupName : string, id : string, parent ?: Group){
    for(let item of DB.Groups){
        if(_AddGroupItem(group, newGroupName, id, item, null) === 'succeeded')
            return 'succeeded!!! group: ' + group.Name + ' added!!!';
    }
    return 'failed';
}
function _AddGroupItem(group: any, newGroupName : string, id : string, node : Group, parent ?: Group) : string{
    if(node.Id === parseInt(id)) {
        if (newGroupName !== '') {
            const tmpMembers = node.Members.slice();
            node.Members = [];
            node.Members.push(group);
            let newGroup = new Group(GetGroupNextId(DB.Groups), newGroupName, tmpMembers);
            node.Members.push(newGroup);
            return DB.writeFile('Groups');
        }

        else {
            if (node.Members.find(item => item.Name === group.Name && GetType(item) === 'group')) {
                return 'failed';
            }
            node.Members.push(group);
            return DB.writeFile('Groups');
        }
    }
    for(let item of node.Members) {
        if(GetType(item) === 'user')
            break;
        let res = _AddGroupItem(group, newGroupName, id, item, node);
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






export function AddUserToExistingGroup(user : any, groupId : number){
    return new Promise((resolve) => {
        const result = _AddUserToExistingGroup(user, groupId);
        resolve(result);
    });
}
function _AddUserToExistingGroup(user : any, groupId : number){
    return 'AddUserToExistingGroup';
}


export function DeleteUserFromGroup(userId : number, groupId : number){
    return new Promise((resolve) => {
        const result = _DeleteUserFromGroup(userId, groupId);
        resolve(result);
    });
}
function _DeleteUserFromGroup(userId : number, groupId : number){
    return 'DeleteUserFromGroup';
}