import {DB} from "../../DB/DB";
import {GetNextId} from "../../Helpers/MainHelpers";



export function AddUser(user: any){
    return new Promise((resolve) => {
        const result = _AddUser(user);
        resolve(result);
    });
}
function _AddUser(user: any){
    if(_UserIndexOf(DB.Users, user.Name) === -1) {
        user.Id = GetNextId(DB.Users);
        DB.Users.push(Object.assign({}, user));
        DB.writeFile('Users');
        return 'succeeded!!! user: ' + user.Name + ' added!!!';
    }
    else
        return 'failed!!! The user is already exists!!!';
}


export function DeleteUser(id: number){
    return new Promise((resolve) => {
        const result = _DeleteUser(id);
        resolve(result);
    });
}
function _DeleteUser(id: number){
    return 'DeleteUser';
}


export function UpdateUser(id: number){
    return new Promise((resolve) => {
        const result = _UpdateUser(id);
        resolve(result);
    });
}
function _UpdateUser(id: number){
    return 'UpdateUser';
}


export function GetUsers(){
    return new Promise((resolve) => {
        const result = _GetUsers();
        resolve(result);
    });
}
function _GetUsers(){
    return DB.Users;
}


export function GetSpecificUser(user){
    return new Promise((resolve) => {
        const result = _GetSpecificUser(user);
        resolve(result);
    });
}
function _GetSpecificUser(user){
    return DB.Users.find(item => item.Name === user.userName && item.Password === user.userPassword);
}


function _UserIndexOf(userArray ,userName){
    for(var i=0 ; i<userArray.length ; i++){
        if(userArray[i].Name === userName){
            return i;
        }
    }
    return -1;
}