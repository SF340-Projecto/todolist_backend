var express = require('express');
var router = express.Router();
var controller = require('../controllers/CategoryController');

router.post('/:id', controller.AddCategory )
router.post('/addTask/:id/:name', controller.addTask )

module.exports = router;