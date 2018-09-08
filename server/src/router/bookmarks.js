const express = require('express');
const router = express.Router();
const bookMarkController = require('../controller/BookmarkController');


router.get('/',bookMarkController.index);
router.get('/byUser',bookMarkController.indexByUser)
router.post('/',bookMarkController.addSong);
router.delete('/:bookmarkId',bookMarkController.deleteBookmark);

module.exports = router;
