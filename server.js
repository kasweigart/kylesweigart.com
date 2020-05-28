const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const bodyParser = require('body-parser');
// const mailgun = require('mailgun-js');
// const config = require('./config');
const cors = require('cors');

// const index = require('./routes/index');

app.use(cors());
// app.use(function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// app.use('/', index);

// const mg = mailgun({apiKey: config.APIKEY, domain: config.DOMAIN});

// // const data = {
// // 	from: 'Excited User <me@samples.mailgun.org>',
// // 	to: 'kasweigart@gmail.com, me@kylesweigart.com',
// // 	subject: 'Hello',
// // 	text: 'Testing some Mailgun awesomness!'
// // };

// // mg.messages().send(data, function (error, body) {
// // 	if (error) {
// // 		console.log(error);
// // 	}
// // 	console.log(body);
// // });

app.listen(port, "127.0.0.1");
console.log(`Listening on port ${port}...`);
