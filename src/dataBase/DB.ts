import * as moment from 'moment'
import {Group} from './../Model/Group'
import {User} from './../Model/User'
import {Message} from './../Model/Message'
import Imember from "../Model/Imember";

export class DB {
    static Messages = [
        new Message("שלום", 'Moshe', 'Yosef', moment().format('h:mm:ss')),
        new Message("מה עניינים?", 'Yosef', 'Moshe', moment().format('h:mm:ss')),
        new Message("מצוין", 'Moshe', 'Yosef', moment().format('h:mm:ss')),
        new Message("יופי, להתראות", 'Yosef', 'Moshe', moment().format('h:mm:ss')),
        new Message("יופי, להתראות", 'Yosef', 'Friends', moment().format('h:mm:ss')),

    ];

    static Users = [
        new User('Moshe', '11', '28' ),
        new User('Raz', '22', '27' ),
        new User('Yosef', '33', '23' ),
        new User('Tommy', '33', '23' ),
        new User('Udi', '33', '23' ),
        new User('Ori', '33', '23' ),
        new User('Roni', '33', '23' ),
    ];


    static Groups = DB.initGroups();

    static initGroups() :  Group[]{
        let tmpGroup = [
            new Group('Friends',
                      [
                            new Group('Best Friends',
                                      [
                                            new Group(
                                                'Good Friends',
                                                [DB.Users[3],
                                                          DB.Users[4]]),
                                          DB.Users[5],
                                          DB.Users[6]]),
                            DB.Users[0],
                            DB.Users[1],
                            DB.Users[2]])
                ];
        return tmpGroup;
    }

    static Data = DB.initData();

    static initData(){
        let data : Imember[] = [];
        data = data.concat(DB.GetGroups());
        data = data.concat(DB.GetUsers());
        return data;
    }


    static GetMessages(sender :Imember, reciver : Imember) : Message[]{
        let resMessages : Message[] = [];
        if(reciver.getType() === 'group'){
            for (let i: number = 0; i < DB.Messages.length; i++) {
                if (DB.Messages[i].Receiving === reciver.getName())
                    resMessages.push(DB.Messages[i]);
            }
        }
        else {
            for (let i: number = 0; i < DB.Messages.length; i++) {
                if (DB.Messages[i].SendingUser === sender.getName() && DB.Messages[i].Receiving === reciver.getName() ||
                    DB.Messages[i].SendingUser === reciver.getName() && DB.Messages[i].Receiving === sender.getName())
                    resMessages.push(DB.Messages[i]);
            }
        }
        return resMessages;
    }

    static SetMessage(m : Message){
        if(! DB.Messages)
            DB.Messages = [];
        this.Messages.push(m);
    }


    static  GetUsers() : User[] {
        if(! this.Users)
            return [];
        else
            return this.Users;
    }

    static GetSpecificUser(userLogin : string, passwordLogin : string){
        for(let item of DB.Users){
            if(item.Name === userLogin && item.Password === passwordLogin)
                return item;
        }
        return null;
    }

    static GetGroups() : Group[]{
        if(! DB.Groups)
            return [];
        else
            return DB.Groups;
    }


    static GetData() : Imember[]{
        if(! DB.Data)
            return [];
        else
            return DB.Data;
    }
}

