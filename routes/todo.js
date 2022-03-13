var express = require('express');
var router = express.Router();
var controller = require('../controllers/TodoController');

router.post('/createTask', controller.createTask)


module.exports = router;