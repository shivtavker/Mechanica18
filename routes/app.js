var express = require('express');
var router = express.Router();

router.get('/starter', function (req, res, next) {
    res.render('Start');
});

router.get('/afterLaunch', function (req, res, next) {
    res.render('afterlaunch');
});

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;