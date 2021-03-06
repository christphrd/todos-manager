var express = require('express');
var router = express.Router();
var model = require('../models/index');

//GET todo list
router.get('/', function (req, res, next) {
    model.Todo.findAll({})
      .then(todos => res.json({
          error: false,
          data: todos
      }))
      .catch(error => res.json({
          error: error,
          data: []
      }))
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
