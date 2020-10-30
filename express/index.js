const express = require('express');
const {usersRouter} = require('./user-router')

const app = express();

function loggerMiddleware(req, res, next) {

    console.log(`[${req.method}] - ${req.url}`);
    next();
}
app.use(loggerMiddleware);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('I have recived you GET request');
});

function authMiddleware(req, res, next) {

    if (req.headers['autorization'] !== undefined){
        next();
    } else {
        res.statusCode = 401;
        res.send('Error! Youneed to autorize');
    }
}



app.post('/',authMiddleware, (req, res) => {
    res.send('I have recived you POST request');
});



app.get('/hello', (req, res) => {
    res.send('I said HELLO MUTHERFACKER');
});
app.get('/users/:id', (req, res) => {
const id = req.params.id;
const sorting = req.query.sorting;
res.send(`you have received data on server #${id} with ${sorting} sorting`);
});

app.listen(8000, () => {
 console.log('Server is listening on port 8000');
});