import {User} from "./Models/User";
import {Group} from "./Models/Group";

const basicUrl = 'http://localhost:4000';

export function GetSpecificUser(userName : string, userPassword : string):Promise<User> {
    const user = {
        userName : userName,
        userPassword : userPassword
    };

    return fetch(basicUrl + '/users/GetSpecificUser', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
        }).then((res) => {
            console.log(res);
            return res.json();
        });
}

export function GetGroups():Promise<Group[]> {
    return fetch(basicUrl + '/groups/GetGroups', {
        headers: {'content-type': 'application/json'}
    }).then((res) => {
        console.log(res);
        return res.json();
    });
}

export function GetUsers():Promise<User[]> {
    return fetch(basicUrl + '/users/GetUsers', {
        headers: {'content-type': 'application/json'}
    }).then((res) => {
        console.log(res);
        return res.json();
    });
}