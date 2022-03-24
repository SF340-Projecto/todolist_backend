var express = require('express');
var router = express.Router();
var controller = require('../controllers/TaskController');


router.post('/:id/:name', controller.addTask )
router.get('/:id/:name', controller.getAllTask )
router.put('/', controller.updateTask )
router.delete('/:id', controller.deleteTask )
module.exports = router;