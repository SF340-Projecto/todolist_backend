var express = require('express');
var router = express.Router();
var controller = require('../controllers/ArchiveController')

router.post('/', controller.getAll)



module.exports = router;