const {Song} = require('../model');


exports.index = async function(req,res,next){
  try{
      let songs = null
      const search = req.query.searchKey;
      if(search){
          songs = await Song.findAll({
              where:{
                  $or:[
                      'title','album','artist','genre'
                  ].map(key =>({
                      [key]:{
                          $like: `%${search}%`,

                      }
                  }))
              }
          })
      }else {
           songs = await Song.findAll({
              limit: 10
          });

      }
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
exports.findSongById = async function (req,res){
    try {
        const id = req.params.id;
        const song = await Song.find({
            where: {
                id:id
            }
        });
        if(song === null){
           return res.status(404).send({
               message:'Resource Not Found, Item Does Not Exist'
            });
        }

        res.status(200).send(song);
    }catch (e) {
        res.status(500).json({
            message:'Error Processing Function',
            error:e.message
        });
    }
};
exports.editSongById = async function(req,res){
    try {
        const songId = req.params.id;
        const song = await Song.update(req.body,{
            where:{
                id:songId
            }
        });
        res.status(201).send({
            song
        });

    } catch (e) {
        res.status(500).send({
            message:'Error Creating Edit Request',
            error:e.message
        });
        console.log(e.message);
    }
};

