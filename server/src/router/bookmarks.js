const express = require('express');
const router = express.Router();
const bookMarkController = require('../controller/BookmarkController');


router.get('/',bookMarkController.index);
router.post('/',bookMarkController.addSong);
router.delete('/:bookmarkId',bookMarkController.deleteBookmark);

module.exports = router;
