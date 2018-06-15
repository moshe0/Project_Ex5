import * as express from 'express';
import * as routes from './Routes';
import * as cors from 'cors';
// import {DB} from "./DB/DB";

const app = express();
app.use(cors());
app.use(express.json());


// app.use('/', () => () => { DB.staticConstructor()});
app.use('/users', routes.UsersRouter);
app.use('/groups', routes.GroupsRouter);
app.use('/messages', routes.MessagesRouter);

export default app;