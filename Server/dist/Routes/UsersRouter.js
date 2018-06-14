"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Controllers = require("../Controllers");
const UserRouter = express.Router();
UserRouter.get('/GetUsers/', Controllers.UsersController.GetUsers);
UserRouter.post('/AddUser/', Controllers.UsersController.AddUser);
UserRouter.delete('/DeleteUser/:id', Controllers.UsersController.DeleteUser);
UserRouter.put('/UpdateUser/:id', Controllers.UsersController.UpdateUser);
// UserRouter.get('/:parmeter1/:parmeter2', Controller.ff);
exports.default = UserRouter;
//# sourceMappingURL=UsersRouter.js.map