import * as fs from 'fs';
import {User} from "../Models/User";
import {Group} from "../Models/Group";
import {Message} from "../Models/Message";

class DataBase {
    public Users : User[];
    public Groups : Group[];
    public Messages : Message[];

    constructor() {
        this.Users = this.readFile("Users");
        this.Groups = this.readFile("Groups");
        this.Messages = this.readFile("Messages");
    }

    readFile(fileName: string) {
        const data = fs.readFileSync(`${__dirname}\\${fileName}Data.json`).toString();
        return JSON.parse(data);
    }

    writeUsersFile(fileName: string, data, res) {
        switch (fileName) {
            case 'Users':
                fs.writeFile(`${__dirname}\\${fileName}Data.json`, JSON.stringify(this.Users), function(err) {
                    if (!!err)
                        res.send("failed");
                    else
                        res.send("succeeded");
                });
            break;
            case 'Groups':
                fs.writeFile(`${__dirname}\\${fileName}Data.json`, JSON.stringify(this.Groups), function(err) {
                    if (!!err)
                        res.send("failed");
                    else
                        res.send("succeeded");
                });
                break;
            case 'Messages':
                fs.writeFile(`${__dirname}\\${fileName}Data.json`, JSON.stringify(this.Messages), function(err) {
                    if (!!err)
                        res.send("failed");
                    else
                        res.send("succeeded");
                });
                break;
        }
    }
}

export const DB = new DataBase();