var DichvuController = require('../controllers/dichvu.controller');
var express = require('express');
var router = express.Router();
router.get('/list', DichvuController.getListDV);
router.get('/add', DichvuController.getAddDV);
router.post('/add', DichvuController.postAddDV);
router.get('/edit:id', DichvuController.getEditDV);
router.post('/edit:id', DichvuController.postEditDV);
module.exports = router;