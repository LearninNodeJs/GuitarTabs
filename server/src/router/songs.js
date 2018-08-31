const express = require('express');
const router = express.Router();
const SongsController = require('../controller/SongController');

router.get('/',function(req,res){
    return res.status(201).json({
        songs:[
            {
                title:'James Bond',
                album:'Arrow',
                artist:'James Bonder'
            }
        ]
    })
});

router.post('/',SongsController.createSong);
router.get('/',SongsController.index)
module.exports = router;