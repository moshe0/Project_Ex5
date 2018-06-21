import {
    AddGroup,
    AddMessage,
    AddUser,
    AddUserToExistingGroup,
    GetGroups,
    GetMessages,
    GetSpecificUser,
    GetUsers
} from "./ServiceApi";
import {User} from "./Models/User";

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

            let data : any[] = [];
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

    async GetMessages(sender : any, receiver : any) {
        try {
            if(!sender)
                return [];
            const ObjMessages = await GetMessages(sender, receiver);

            console.log('GetMessages SUCCESSFUL');
            return ObjMessages;
        }
        catch (e) {
            console.log('GetMessages FAILD');
            return null;
        }
    }

    async AddMessage(message : any) {
        try {
            const ObjMessages = await AddMessage(message);
            console.log('AddMessage SUCCESSFUL');
            return ObjMessages;
        }
        catch (e) {
            console.log('AddMessage FAILD');
            return null;
        }
    }

    async AddUser(user : any) {
        try {
            const ObjUser= await AddUser(user);
            console.log('AddUser SUCCESSFUL');
            return ObjUser;
        }
        catch (e) {
            console.log('AddUser FAILD');
            return null;
        }
    }

    async AddGroup(group: any, newGroupName : string, parentId : string) {
        try {
            const ObjGroup = await AddGroup(group, newGroupName, parentId);
            console.log('AddGroup SUCCESSFUL');
            return ObjGroup;
        }
        catch (e) {
            console.log('AddGroup FAILD');
            return null;
        }
    }

    async AddUserToExistingGroup(userName: string, parentId : string) {
        try {
            const ObjGroup = await AddUserToExistingGroup(userName, parentId);
            console.log('AddUserToExistingGroup SUCCESSFUL');
            return ObjGroup;
        }
        catch (e) {
            console.log('AddUserToExistingGroup FAILD');
            return null;
        }
    }



}




export const appService = new AppService();