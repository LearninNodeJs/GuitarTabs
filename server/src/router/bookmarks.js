const express = require('express');
const router = express.Router();
const bookMarkController = require('../controller/BookmarkController');


router.get('/',bookMarkController.index);

module.exports = router;
