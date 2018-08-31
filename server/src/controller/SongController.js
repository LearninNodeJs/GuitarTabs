const {Song} = require('../model');


exports.index = async function(req,res,next){
  try{
      const songs = await Song.findAll({
          limit:10
      });
      /*res.status(201).json({
          songs
      });*/
      res.status(201).send(songs);

  }catch (error) {
      res.status(500).json({
         message:'An Error Occured Fetching Songs',
         error:error.message
      });
  }
};



exports.createSong = async function(req,res,next){
    try{
        const song = await Song.create(req.body);
        res.status(201).json({
            message:'Song Created',
            song
        })
    }catch (err) {
        res.status(500).json({
            message:'Error Occurred',
            error:err.message
        });
    }
};