const express = require('express');
const mailgun = require('mailgun-js');
const config = require('./config');

const router = express.Router();

const mg = mailgun({apiKey: config.APIKEY, domain: config.DOMAIN});

const sendEmail = (to, from, subject, content) => {
  let data = {
    to,
    from,
    subject,
    text: content
  };
  return mg.messages().send(data, function (error, body) {
    if (error) {
        console.log(error);
    }
    console.log(body);
});
};

router.post('/api/contact', async (req, res, next) => {
  try {
    await sendEmail('kasweigart@gmail.com', 'me@kylesweigart.com', `New message from ${req.body.from}`, req.body.message);
    res.send('Email sent!');
  } catch(e) {
    console.log(e);
    res.status(500);
  }
});

module.exports = router;