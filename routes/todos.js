var express = require('express');
var router = express.Router();
var model = require('../models/index');

//GET todo list
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//GET todo
router.get('/:id', function (req, res, next) {

});

//POST new todo
router.post('/', function (req, res, next) {

});

//UPDATE todo
router.put('/:id', function (req, res, next) {

});

//DELETE todo
router.delete('/:id', function (req, res, next) {

});

module.exports = router;
