const {Bookmark} = require('../model');

exports.index = async function(req,res){
  try {
      let songs = null;
      const songId = req.query.songId;
      const userId = req.query.userId;
      const bookmark = await Bookmark.findOne({
          where:{
              SongId:songId,
              userId:userId
          }
      });
      if(bookmark===null || bookmark === undefined){
          return res.status(404).send({
            message:'There are No Existing Bookmarks of the Requested user for the Song'
          })
      }
      res.status(201).send(bookmark);
  }  catch (e) {
      res.status(500).json({error:e.message});
      console.log(e.message);
  }
};