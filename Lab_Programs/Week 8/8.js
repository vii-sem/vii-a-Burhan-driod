const http = require('http');
const fs = require('fs');
const url = require('url');

//http.createServer( (1parameter is req ,another parameter is res)=>{ Write logic //here}).listen(portnumber);


http.createServer((req, res) => {
    console.log(req)
    let body = '';
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('./http-form.html', 'UTF-8', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    }
    else
    if (req.method === 'GET') {
        const add = req.url;
        const q = url.parse(add, true);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(JSON.stringify(q.query), 'utf-8');
        res.end();
    }

    
    else if (req.method === 'POST') {
        req.on('data', (data1) => {
            body += data1;
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(body, () => {
                res.end();
            });
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h1>404 ERROR could not find that Page</h1>`);
    }
}).listen(9845);
console.log('Server is Running');