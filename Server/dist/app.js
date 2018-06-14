"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// import * as routes from './Routes';
const app = express();
app.use(express.json());
// app.use('/user', routes.Users);
// app.use('/group', routes.GroupsRouter);
// app.use('/member', routes.Members);
exports.default = app;
//# sourceMappingURL=app.js.map