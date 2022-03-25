var express = require('express');
var router = express.Router();
var controller = require('../controllers/TaskController');


router.post('/:id/:_id', controller.addTask )
router.get('/:id/:_id', controller.getAllTask )
router.put('/', controller.updateTask )
router.delete('/:id', controller.deleteTask )
module.exports = router;