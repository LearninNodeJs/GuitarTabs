const express = require('express');
const router = express.Router();
const HistoryController = require('../controller/HistoryController');

router.get('/',HistoryController.index);
router.post('/',HistoryController.post);


module.exports = router;