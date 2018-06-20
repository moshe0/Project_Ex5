"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetNextId(obj) {
    let result = obj.map(item => item.Id);
    result.sort();
    let res = 1;
    for (let i = 0; i < result.length; i++, res++) {
        if (result[i] !== res) {
            break;
        }
    }
    return res;
}
exports.GetNextId = GetNextId;
function GetGroupArrId(obj) {
    let idArr = [];
    for (let item of obj.Members) {
        if (GetType(item) === 'user')
            break;
        idArr.push({ "Id": item.Id });
        idArr.concat(GetGroupNextId(item));
    }
    return [];
}
exports.GetGroupArrId = GetGroupArrId;
function GetGroupNextId(obj) {
    let groupArr = [];
    for (let item of obj) {
        groupArr.concat(GetGroupArrId(item));
    }
    return GetNextId(groupArr);
}
exports.GetGroupNextId = GetGroupNextId;
function GetType(Obj) {
    for (let propName in Obj) {
        if (propName === 'Members')
            return 'group';
    }
    return 'user';
}
exports.GetType = GetType;
function GetItems(Obj) {
    if (GetType(Obj) === 'user')
        return [];
    return Obj['Members'];
}
exports.GetItems = GetItems;
//# sourceMappingURL=MainHelpers.js.map