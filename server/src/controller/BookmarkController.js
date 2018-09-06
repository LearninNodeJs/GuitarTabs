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
          return res.send({
            message:'There are No Existing Bookmarks of the Requested user for the Song',
            bookmarkOnStore:null
          })
      }
      res.status(201).send(bookmark);
  }  catch (e) {
      res.status(500).json({error:e.message});
      console.log(e.message);
  }
};
exports.addSong = async function(req,res,next){
  try{
      const bookmark = req.body;
      const user = await Bookmark.create(bookmark);
      res.status(201).send({
          message:'Bookmark Created',
          user
      })
  } catch (e) {
      console.log(e.message);
  }
};