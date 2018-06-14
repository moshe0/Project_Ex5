"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetMessages() {
    return new Promise((resolve) => {
        const result = _GetMessages();
        resolve(result);
    });
}
exports.GetMessages = GetMessages;
function _GetMessages() {
    return 'GetMessages';
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