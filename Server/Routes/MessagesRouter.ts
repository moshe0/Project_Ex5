import * as express from 'express';
import * as Controllers from "../Controllers";

const MessagesRouter = express.Router();


MessagesRouter.get('/GetMessages/', Controllers.MessagesController.GetMessages);

MessagesRouter.post('/AddMessage/', Controllers.MessagesController.AddMessage);


export default MessagesRouter;