import Imember from "./Imember";

export class User implements Imember{
    constructor(public Id: number, public Name : string, public Password : string, public Age : Number)
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