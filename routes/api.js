const express = require('express');
const router = express.Router();
const mailchimp = require('../domain/mailchimp');

/* GET users listing. */
router.post('/subscribe', (req, res) => {
  const email = req.body.email;
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  mailchimp.subscribeToList(email, ip).then(data => {
    res.json(data);
  }).catch(err => res.json(err))
});

module.exports = router;
