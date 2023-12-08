const express = require('express');
const router = express.Router();
const purchaseCtrl = require('../controllers/purchase.ctrl')

router.post('/', purchaseCtrl.purchase)

module.exports = router