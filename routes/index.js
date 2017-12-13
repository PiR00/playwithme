var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Play With Me' });
});

router.get('/room/:id', function(req, res, next) {
  console.log("coucou");
  var Id = req.params.id;
  res.render('room', { id: Id});
});

module.exports = router;
