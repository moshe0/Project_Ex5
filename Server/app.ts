import * as express from 'express';
// import * as routes from './Routes';

const app = express();
app.use(express.json());


// app.use('/user', routes.Users);
// app.use('/group', routes.GroupsRouter);
// app.use('/member', routes.Members);

export default app;