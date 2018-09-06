const express = require('express');
const router = express.Router();
const SongsController = require('../controller/SongController');
const BookmarkController = require('../controller/BookmarkController');

router.post('/',SongsController.createSong);
router.get('/',SongsController.index);
router.get('/:id',SongsController.findSongById);
router.post('/:id',SongsController.editSongById);



module.exports = router;