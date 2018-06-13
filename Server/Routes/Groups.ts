import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello')
});

router.post('/AddGroup', (req, res) => {
    res.send('Hello AddGroup')
});

router.delete('/DeleteGroup', (req, res) => {
    res.send('Hello DeleteGroup')
});

router.delete('/FlatteningGroup', (req, res) => {
    res.send('Hello FlatteningGroup')
});


export default router;