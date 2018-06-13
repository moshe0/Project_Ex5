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