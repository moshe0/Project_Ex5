import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello')
});

router.post('/AddUserToExistingGroup', (req, res) => {
    res.send('Hello AddUserToExistingGroup')
});

router.delete('/DeleteUserFromGroup', (req, res) => {
    res.send('Hello DeleteUserFromGroup')
});

router.post('/AddNewGroupToGroup', (req, res) => {
    res.send('Hello AddNewGroupToGroup')
});


export default router;