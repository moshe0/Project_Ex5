"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class DB {
    static staticConstructor() {
        DB.Users = DB.readFile("Users");
        DB.Groups = DB.readFile("Groups");
        DB.Messages = DB.readFile("Messages");
    }
    ;
    static readFile(fileName) {
        const data = fs.readFileSync(`${__dirname}\\${fileName}Data.json`).toString();
        return JSON.parse(data);
    }
    static writeUsersFile(fileName, data, res) {
        switch (fileName) {
            case 'Users':
                fs.writeFile(`${__dirname}\\${fileName}Data.json`, JSON.stringify(this.Users), function (err) {
                    if (!!err)
                        res.send("failed");
                    else
                        res.send("succeeded");
                });
                break;
            case 'Groups':
                fs.writeFile(`${__dirname}\\${fileName}Data.json`, JSON.stringify(this.Groups), function (err) {
                    if (!!err)
                        res.send("failed");
                    else
                        res.send("succeeded");
                });
                break;
            case 'Messages':
                fs.writeFile(`${__dirname}\\${fileName}Data.json`, JSON.stringify(this.Messages), function (err) {
                    if (!!err)
                        res.send("failed");
                    else
                        res.send("succeeded");
                });
                break;
        }
    }
}
exports.DB = DB;
//# sourceMappingURL=DB.js.map