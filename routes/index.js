var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chuck', joke: null });
});

router.post('/', function(req, res) {
  request('https://api.chucknorris.io/jokes/random',
  function(err, response, body) {
    var joke = JSON.parse(body);
    console.log('joke: ' + body)
    res.render('index', {joke: joke});
  })
})

module.exports = router;
