var express = require('express');
var router = express.Router();
var controller = require('../controllers/CategoryController');

router.get('/:id', controller.getAllCategory )
router.post('/', controller.AddCategory )
router.put('/', controller.updateCategory )
router.delete('/:id', controller.deleteCategory )
// router.post('/addTask/:id/:name', controller.addTask )

module.exports = router;