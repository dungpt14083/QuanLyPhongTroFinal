var loaiphongController = require('../controllers/loaiphong.controller');
var express = require('express');
var router = express.Router();

router.get('/list', loaiphongController.getListLP);
router.get('/add', loaiphongController.getAddLP);
router.post('/add', loaiphongController.postAddLP);
router.get('/edit:id', loaiphongController.getEditLP);
router.post('/edit:id', loaiphongController.postEditLP);
module.exports = router;