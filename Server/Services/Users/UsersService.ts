export function ff(id: number){
    return new Promise((resolve) => {
        const result = f1(id);
        resolve(result);
    });
}

function f1(id: number){
    return 'f1';
}

export function AddUser(id: number){
    return new Promise((resolve) => {
        const result = _AddUser(id);
        resolve(result);
    });
}

function _AddUser(id: number){
    return 'AddUser';
}



