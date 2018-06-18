"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Group {
    constructor(Name, Members) {
        this.Name = Name;
        this.Members = Members;
    }
    getName() {
        return this.Name;
    }
    getType() {
        return 'group';
    }
    getItems() {
        return this.Members;
    }
}
exports.Group = Group;
//# sourceMappingURL=Group.js.map