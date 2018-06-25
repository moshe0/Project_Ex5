"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const MainHelpers_1 = require("../Helpers/MainHelpers");
class DataBase {
    constructor() {
        this.Users = this.readFile("Users");
        this.Groups = this.readFile("Groups");
        this.Messages = this.readFile("Messages");
    }
    readFile(fileName) {
        const data = fs.readFileSync(`${__dirname}\\${fileName}Data.json`).toString();
        if (fileName != "Groups")
            return JSON.parse(data);
        return this.GetGroupsWithFullUser(JSON.parse(data));
    }
    writeFile(fileName) {
        switch (fileName) {
            case 'Users':
                fs.writeFile(`${__dirname}\\${fileName}Data.json`, JSON.stringify(this.Users), function (err) {
                    if (!!err)
                        return "failed";
                    // res.send("failed");
                    else
                        return "succeeded";
                    // res.send("succeeded");
                });
                break;
            case 'Groups':
                fs.writeFile(`${__dirname}\\${fileName}Data.json`, JSON.stringify(this.Groups), function (err) {
                    if (!!err)
                        return "failed";
                    // res.send("failed");
                    else
                        return "succeeded";
                    // res.send("succeeded");
                });
                break;
            case 'Messages':
                fs.writeFile(`${__dirname}\\${fileName}Data.json`, JSON.stringify(this.Messages), function (err) {
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
    GetGroupsWithOnlyIdOfUser(obj) {
        for (let item of obj) {
            this._GetGroupsWithOnlyIdOfUser(item);
        }
        return obj;
    }
    _GetGroupsWithOnlyIdOfUser(obj) {
        for (let item of obj.Members) {
            if (MainHelpers_1.GetType(item) === 'user')
                item = { "Id": item.Id };
            this._GetGroupsWithOnlyIdOfUser(item);
        }
        return obj;
    }
    GetGroupsWithFullUser(obj) {
        for (let item of obj) {
            this._GetGroupsWithFullUser(item);
        }
        return obj;
    }
    _GetGroupsWithFullUser(obj) {
        for (let i; i < obj.Members.length; i++) {
            if (MainHelpers_1.GetType(obj.Members[i]) === 'user') {
                let index = exports.DB.Users.find(user => user.Id = obj.Members[i].Id);
                if (index === -1)
                    obj.Members.slice(i, 1);
                obj.Members[i] = exports.DB.Users[index];
            }
            this._GetGroupsWithOnlyIdOfUser(obj.Members[i]);
        }
        return obj;
    }
}
exports.DB = new DataBase();
//# sourceMappingURL=DB.js.map