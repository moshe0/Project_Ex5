import * as Controllers from "../../Controllers";
import UserRouter from "../../Routes/UsersRouter";
import {DB} from "../../DB/DB";

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
        const result = _AddGroup(group, newGroupName, id);
        resolve(result);
    });
}
function _AddGroup(group: any, newGroupName : string, id : string){
    console.log('group: ' + group);
    console.log('newGroupName: ' + newGroupName);
    console.log('arrPath: ' + id);
    return "SSSSS";
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