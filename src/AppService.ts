import {GetGroups, GetSpecificUser, GetUsers} from "./ServiceApi";
import {User} from "./Models/User";
import Imember from "./Models/Imember";

export class AppService {
    async GetSpecificUser(userName : string, userPassword : string) {
        try {
            const ObjUser : User = await GetSpecificUser(userName, userPassword);
            console.log('GetSpecificUser SUCCESSFUL');
            let user = new User(ObjUser.Id, ObjUser.Name, ObjUser.Password, ObjUser.Age);
            return user;
        }
        catch (e) {
            console.log('GetSpecificUser FAILD');
            return null;
        }
    }

    async GetData() {
        try {
            const ObjGroups= await GetGroups();
            console.log(ObjGroups);
            const ObjUsers = await GetUsers();
            console.log(ObjUsers);

            let data : Imember[] = [];
            data = data.concat(ObjGroups);
            data = data.concat(ObjUsers);

            console.log('GetData SUCCESSFUL');
            return data;
        }
        catch (e) {
            console.log('GetData FAILD');
            return null;
        }
    }
}

export const appService = new AppService();