"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(Name, Password, Age) {
        this.Name = Name;
        this.Password = Password;
        this.Age = Age;
    }
    getName() {
        return this.Name;
    }
    getType() {
        return 'user';
    }
    getItems() {
        return [];
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map