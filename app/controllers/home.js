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
    res.render('index');
  });
});

router.post('/save', function(req, res, next){
  console.log(req);  
});
