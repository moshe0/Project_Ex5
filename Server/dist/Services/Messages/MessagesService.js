"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = require("../../DB/DB");
function GetMessages() {
    return new Promise((resolve) => {
        const result = _GetMessages();
        resolve(result);
    });
}
exports.GetMessages = GetMessages;
function _GetMessages() {
    return DB_1.DB.Messages;
}
function AddMessage(massage) {
    return new Promise((resolve) => {
        const result = _AddMessage(massage);
        resolve(result);
    });
}
exports.AddMessage = AddMessage;
function _AddMessage(massage) {
    return 'AddMessage';
}
//# sourceMappingURL=MessagesService.js.map