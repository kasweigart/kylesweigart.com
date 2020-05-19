const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const http = require('http');
const https = require('https');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({ msg: 'We did it!'});
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

if (process.env.NODE_ENV === "production") {
    const privateKey = fs.readFileSync('/etc/letsencrypt/live/sweigart.dev/privkey.pem', 'utf8');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/sweigart.dev/cert.pem', 'utf8');
    const ca = fs.readFileSync('/etc/letsencrypt/live/sweigart.dev/chain.pem', 'utf8');
    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca
    };

    https.createServer(credentials, app).listen(443, () => {
        console.log('HTTPS Server running on port 443');
    });
    http.createServer(function (req, res) {
        res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
        res.end();
    }).listen(80);
} else if (process.env.NODE_ENV === "development") {
    app.listen(9000);
} else {
    app.listen(9000);
}