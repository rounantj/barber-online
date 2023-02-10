import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ message: 'Hello from the API!' });
});

router.get('/teste', (req, res) => {
    res.send({ message: 'teste!' });
});


export default router;
