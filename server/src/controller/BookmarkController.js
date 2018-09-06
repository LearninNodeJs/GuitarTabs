const {Bookmark} = require('../model');

exports.index = async function(req,res){
  try {
      let songs = null;
      const songId = req.query.songId;
      const bookmark = await Bookmark.findOne({
          where:{
              SongId:songId
          }
      });
      if(bookmark===null || bookmark === undefined){
          return res.status(404).send({
            message:'There are No Existing Bookmarks for the Song'
          })
      }
      res.status(201).send(bookmark);
  }  catch (e) {
      res.status(500).json({error:e.message});
      console.log(e.message);
  }
};