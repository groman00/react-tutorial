var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET articles page. */
router.get('/articles', function(req, res, next) {
  res.render('index', { title: 'Articles', script: 'articles' });
});

/* GET users page. */
router.get('/users', function(req, res, next) {
  res.render('index', { title: 'Users', script: 'users' });
});

module.exports = router;
