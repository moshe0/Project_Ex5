import {Group} from "../Models/Group";

export function GetNextId(obj : {Id}[]){
    let result = obj.map(item => item.Id);
    result.sort();

    let res=1;
    for(let i=0 ; i<result.length ; i++, res++) {
        if (result[i] !== res) {
            break;
        }
    }
    return res;
}

export function GetGroupArrId(obj : Group){
    let idArr = [];
    for(let item of obj.Members) {
        if(GetType(item) === 'user')
            break;
        idArr.push({"Id" : item.Id});
        idArr.concat(GetGroupNextId(item));
    }
    return [];
}

export function GetGroupNextId(obj : Group[]){
    let groupArr = [];
    for(let item of obj) {
        groupArr.concat(GetGroupArrId(item));
    }
    return GetNextId(groupArr);
}



export function GetType(Obj) : string{
    for(let propName in Obj) {
        if(propName === 'Members')
            return 'group';
    }
    return 'user';
}

export function GetItems(Obj) : any[]{
    if(GetType(Obj) === 'user')
        return [];
    return Obj['Members'];
}
