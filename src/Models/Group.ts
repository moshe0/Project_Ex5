import Imember from "./Imember";

export class Group implements Imember{
    constructor(public Id: number, public Name : string, public Members : Imember[]){}


    getName(){
        return this.Name;
    }
    getType(){
        return 'group';
    }
    getItems(){
        return this.Members;
    }
}


