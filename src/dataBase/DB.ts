import * as moment from 'moment';
import {Group} from './../Models/Group';
import {User} from './../Models/User';
import {Message} from './../Models/Message';
import Imember from './../Models/Imember';

export class DB {

    static Users = [
        new User(1,'Moshe', '11', 11 ),
        new User(2,'Raz', '22', 22 ),
        new User(3,'Yosef', '33', 33 ),
        new User(4,'Tommy', '44,', 44 ),
        new User(5,'Udi', '55', 55 ),
        new User(6,'Ori', '66', 66 ),
        new User(7,'Roni', '77', 77 ),
    ];

    static Messages = [
        new Message(1,"שלום",'Moshe','Yosef', moment().format('h:mm:ss')),
        new Message(2,"מה עניינים?",'Yosef','Moshe', moment().format('h:mm:ss')),
        new Message(3,"מצוין", 'Moshe','Yosef', moment().format('h:mm:ss')),
        new Message(4,"יופי, להתראות",'Yosef','Moshe', moment().format('h:mm:ss')),
        new Message(5,"יופי, להתראות",'Yosef','Friends', moment().format('h:mm:ss')),
    ];



    static Groups = DB.initGroups();

    static initGroups() :  Group[]{
        let tmpGroup = [
            new Group(1,'Friends',
                      [
                            new Group(2,'Best Friends',
                                      [
                                            new Group(
                                                3,'Good Friends',
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

