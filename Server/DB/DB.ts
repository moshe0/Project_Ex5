import * as fs from 'fs';
import {User} from "../Models/User";
import {Group} from "../Models/Group";
import {Message} from "../Models/Message";

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
        return JSON.parse(data);
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
        return "failed";
    }
}

export const DB = new DataBase();