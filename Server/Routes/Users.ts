import * as express from 'express';
import * as Controllers from '../Controllers';


const UserRouter = express.Router();

UserRouter.get('/', (req, res) => {
    res.send('Hello')
});

UserRouter.post('/AddUser/:id', Controllers.UsersController.AddUser);

UserRouter.delete('/DeleteUser', (req, res) => {
    res.send('Hello DeleteUser')
});

UserRouter.put('/UpdateUser', (req, res) => {
    res.send('Hello UpdateUser')
});



UserRouter.get('/:id', Controllers.UsersController.ff);

// UserRouter.get('/:parmeter1/:parmeter2', Controller.ff);


export default UserRouter;