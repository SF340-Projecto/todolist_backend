var express = require('express');
var router = express.Router();
var controller = require('../controllers/TaskController');


router.post('/:id/:name', controller.addTask )
module.exports = router;