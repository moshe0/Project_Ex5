"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class DataBase {
    constructor() {
        this.Users = this.readFile("Users");
        this.Groups = this.readFile("Groups");
        this.Messages = this.readFile("Messages");
    }
    readFile(fileName) {
        const data = fs.readFileSync(`${__dirname}\\${fileName}Data.json`).toString();
        return JSON.parse(data);
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
}
exports.DB = new DataBase();
//# sourceMappingURL=DB.js.map