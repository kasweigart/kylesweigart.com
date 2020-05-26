const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.post('/send', (req, res) => {
	console.log(req.body);
});

app.listen(port, "127.0.0.1");
console.log(`Listening on port ${port}...`);
