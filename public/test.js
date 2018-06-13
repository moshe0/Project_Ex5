class User {
    constructor(Id, Name, Age, Password) {
        this._Id = Id;
    }

    get Id(){
        return this._Id;
    }
}

var Users = [
    new User(1,'Moshe', '11', 11 ),
    new User(2,'Raz', '22', 22 ),
    new User(3,'Yosef', '33', 33 ),
    new User(4,'Tommy', '44,', 44 ),
    new User(5,'Udi', '55', 55 ),
    new User(6,'Ori', '66', 66 ),
    new User(7,'Roni', '77', 77 )
];



console.log(GetNextId(Users));


function GetNextId(obj){
    let result = obj.map(item => item.Id);
    result.sort();

    let res=1;
    for(i=0 ; i<result.length ; i++, res++) {
        if (result[i] !== res) {
            break;
        }
    }
    return res;
}