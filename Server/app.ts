import * as express from 'express';
import * as routes from './Routes';

const app = express();

app.use('/User', routes.Users);
app.use('/Group', routes.Groups);
app.use('/Member', routes.Members);

export default app;