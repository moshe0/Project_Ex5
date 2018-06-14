import * as fs from 'fs';
import {User} from "../Models/User";
import {Group} from "../Models/Group";
import {Message} from "../Models/Message";

export class DB {
    static Users : User[];
    static Groups : Group[];
    static Messages : Message[];

    static staticConstructor() {
        DB.Users = DB.readFile("Users");
        DB.Groups = DB.readFile("Groups");
        DB.Messages = DB.readFile("Messages");

    };

    static readFile(fileName: string) {
        const data = fs.readFileSync(`${__dirname}\\${fileName}Data.json`).toString();
        return JSON.parse(data);
    }

    static writeUsersFile(fileName: string, data, res) {
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