export function GetMessages(){
    return new Promise((resolve) => {
        const result = _GetMessages();
        resolve(result);
    });
}
function _GetMessages(){
    return 'GetMessages';
}

export function AddMessage(massage: any){
    return new Promise((resolve) => {
        const result = _AddMessage(massage);
        resolve(result);
    });
}
function _AddMessage(massage: any){
    return 'AddMessage';
}