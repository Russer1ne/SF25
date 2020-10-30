const http = require('http');

const app = http.createServer((req, res) => {
    if (req.url === '/hello') {
    res.statusCode = 418;
    res.setHeader('X-Custom-Header', 'RusserHeader');
    res.write('Hello from server');
    
} else if (req.method === 'POST' && req.url === '/data'){
    res.write('i got your data');
}else {
        res.write('Default response');
    }
    res.end();
})

app.listen(8000);

app.on('listening', () => {
    console.log('Server is listening on port 8000');
})