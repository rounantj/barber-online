import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        message: 'Hello from the views!',
    });
});

router.get('/login', (req, res) => {
    res.render('login', {
        aside: 'display:none !important',
    });
});

router.get('/registre-se', (req, res) => {
    res.render('registre-se', {
        aside: 'display:none !important',
    });
});

router.get('/parceiros', (req, res) => {
    res.render('parceiros', {
        message: 'Hello from the views!',
    });
});

export default router;