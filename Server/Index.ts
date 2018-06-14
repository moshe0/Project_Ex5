import * as http from 'http';
import app from './app';

const server = http.createServer(app);

server.listen(4000, ()=>console.log("listening on port 4000"));