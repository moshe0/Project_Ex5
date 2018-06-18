"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./app");
const server = http.createServer(app_1.default);
server.listen(4000, () => console.log("listening on port 4000"));
//# sourceMappingURL=Index.js.map