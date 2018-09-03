var express = require('express');
var router = express.Router();
var model = require('../models/index');

//GET todo list
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//GET todo

//POST new todo

//UPDATE todo

//DELETE todo

module.exports = router;
