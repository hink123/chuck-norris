var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Chuck', joke: null });
// });

router.get('/', function(req, res) {
  var url = 'https://api.chucknorris.io/jokes/random?category=' + req.query.category;
  request(url,
  function(err, response, body) {
    var joke = JSON.parse(body);
    res.render('index', {joke: joke});
  })
})

module.exports = router;
