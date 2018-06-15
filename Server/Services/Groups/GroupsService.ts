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


export function AddGroup(user: any){
    return new Promise((resolve) => {
        const result = _AddGroup(user);
        resolve(result);
    });
}
function _AddGroup(user: any){
    return 'AddGroup';
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


export function AddNewGroupToGroup(groupId : number, group : any){
    return new Promise((resolve) => {
        const result = _AddNewGroupToGroup(groupId, group);
        resolve(result);
    });
}
function _AddNewGroupToGroup(groupId : number, group : any){
    return 'AddNewGroupToGroup';
}

