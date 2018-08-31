const express = require('express');
const router = express.Router();
const SongsController = require('../controller/SongController');

router.post('/',SongsController.createSong);
router.get('/',SongsController.index)
module.exports = router;