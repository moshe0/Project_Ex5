import * as fs from 'fs';
import {User} from "../Models/User";
import {Group} from "../Models/Group";
import {Message} from "../Models/Message";

export class DB {
    static Users : User[];
    static Groups : Group[];
    static Messages : Message[];


    static readUsersFile() {
        const data = fs.readFileSync(`${__dirname}\\UsersData.json`).toString();
        return JSON.parse(data);
    }

    static readGroupsFile() {
        const data = fs.readFileSync(`${__dirname}\\GroupsData.json`).toString();
        return JSON.parse(data);
    }

    static readMessagesFile() {
        const data = fs.readFileSync(`${__dirname}\\MessagesData.json`).toString();
        return JSON.parse(data);
    }


    static writeUsersFile(data, res) {
        fs.writeFile(`${__dirname}\\UsersData.json`, JSON.stringify(this.Users), function(err) {
            if (!!err) {
                res.send("failed");
            }
            res.send("succeeded");
        });
    }

    static writeGroupsFile(data, res) {
        fs.writeFile(`${__dirname}\\GroupsData.json`, JSON.stringify(this.Groups), function(err) {
            if (!!err) {
                res.send("failed");
            }
            res.send("succeeded");
        });
    }

    static writeMessagesFile(data, res) {
        fs.writeFile(`${__dirname}\\MessagesData.json`, JSON.stringify(this.Messages), function(err) {
            if (!!err) {
                res.send("failed");
            }
            res.send("succeeded");
        });
    }

}
