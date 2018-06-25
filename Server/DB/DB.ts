import * as fs from 'fs';
import {User} from "../Models/User";
import {Group} from "../Models/Group";
import {Message} from "../Models/Message";
import {GetType} from "../Helpers/MainHelpers";

class DataBase {
    public Users : any[];
    public Groups : Group[];
    public Messages : any[];

    constructor() {
        this.Users = this.readFile("Users");
        this.Groups = this.readFile("Groups");
        this.Messages = this.readFile("Messages");
    }

    readFile(fileName: string) {
        const data = fs.readFileSync(`${__dirname}\\${fileName}Data.json`).toString();
        if(fileName != "Groups")
            return JSON.parse(data);
        return this.GetGroupsWithFullUser(JSON.parse(data));
    }

    writeFile(fileName: string) : string {
        switch (fileName) {
            case 'Users':
                fs.writeFile(`${__dirname}\\${fileName}Data.json`, JSON.stringify(this.Users), function(err) {
                    if (!!err)
                        return "failed";
                        // res.send("failed");
                    else
                        return "succeeded";
                        // res.send("succeeded");
                });
            break;
            case 'Groups':
                this.Groups = this.GetGroupsWithOnlyIdOfUser(this.Groups);
                fs.writeFile(`${__dirname}\\${fileName}Data.json`, JSON.stringify(this.Groups), function(err) {
                    if (!!err)
                        return "failed";
                    // res.send("failed");
                    else
                        return "succeeded";
                    // res.send("succeeded");
                });
                break;
            case 'Messages':
                fs.writeFile(`${__dirname}\\${fileName}Data.json`, JSON.stringify(this.Messages), function(err) {
                    if (!!err)
                        return "failed";
                    // res.send("failed");
                    else
                        return "succeeded";
                    // res.send("succeeded");
                });
                break;
        }
        return "succeeded";
    }


    GetGroupsWithOnlyIdOfUser (obj : Group[]){
        for(let item of obj){
            this._GetGroupsWithOnlyIdOfUser(item);
        }
        return obj;
    }
    _GetGroupsWithOnlyIdOfUser (obj : Group){
        for(let item of obj.Members) {
            if(GetType(item) === 'user')
                item = {"Id" : item.Id};
            this._GetGroupsWithOnlyIdOfUser(item);
        }
        return obj;
    }

    GetGroupsWithFullUser(obj : Group[]){
        for(let item of obj){
            this._GetGroupsWithFullUser(item);
        }
        return obj;
    }
    _GetGroupsWithFullUser(obj : Group){
        for(let i ; i<obj.Members.length ; i++) {
            if(GetType(obj.Members[i]) === 'user') {
                let index = DB.Users.find(user => user.Id = obj.Members[i].Id);
                if(index === -1)
                    obj.Members.slice(i, 1);
                obj.Members[i] = DB.Users[index];
            }
            this._GetGroupsWithOnlyIdOfUser(obj.Members[i]);
        }
        return obj;
    }
}

export const DB = new DataBase();