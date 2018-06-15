import {DB} from "../../DB/DB";



export function AddUser(user: any){
    return new Promise((resolve) => {
        const result = _AddUser(user);
        resolve(result);
    });
}
function _AddUser(user: any){
    return 'AddUser';
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

