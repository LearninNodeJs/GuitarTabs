const express = require('express');
const router = express.Router();

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

module.exports = router;