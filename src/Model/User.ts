import Imember from "./Imember";

export class User implements Imember{
    constructor(public Name : string, public Password : string, public Age : string)
    {}

    getName(){
        return this.Name;
    }
    getType(){
        return 'user';
    }
    getItems(){
        return [];
    }
}