const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Here are your users list: [...]');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const sorting = req.query.sorting;
    res.send(`you have received data on server #${id} with ${sorting} sorting`);
    });
    
router.post('/', (req, res) => {
        res.send('I hame received your POST request to /users');
    });

    module.exports = {
        usersRouter: router
    };
