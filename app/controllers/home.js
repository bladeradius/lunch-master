var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Lunch = mongoose.model('Lunch');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Lunch.find(function (err, lunches) {
    if (err) return next(err);
    res.render('index', {
      title: 'LUNCH LOCKER',
      lunches: lunches
    });
  });
});

router.get('/update', function(req, res, next){
  res.json({ "testing": "this!" });  
});
