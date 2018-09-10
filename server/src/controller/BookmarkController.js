const {Bookmark,Song} = require('../model');
const _ = require('lodash');

exports.index = async function(req,res){
  try {
      let songs = null;
      const songId = req.query.songId;
      const userId = req.query.userId;
      const bookmark = await Bookmark.findOne({
          where:{
              SongId:songId,
              UserId:userId
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

exports.indexByUser = async function(req,res){
    try {
        let songs = null;
        const userId = req.query.userId;
        const bookmarks = await Bookmark.findAll({
            where:{
                UserId:userId
            },
            include:[
                {
                    model:Song
                }
            ]
        }).map(bookmark => bookmark.toJSON())
            .map(bookmark => _.extend(
                {},
                bookmark.Song,
                bookmark
            ));

        if(bookmarks===null || bookmarks === undefined){
            return res.send({
                message:'There are No Existing Bookmarks of the Requested user for the Song',
                bookmarkOnStore:null
            })
        }
        res.status(201).send(bookmarks);
    }  catch (e) {
        res.status(500).json({error:e.message});
        console.log(e.message);
    }
};
exports.addSong = async function(req,res,next){
  try{
      const {SongId,UserId} = req.body;
      const bookmark = await Bookmark.findOne({
          where:{
              SongId: SongId,
              UserId: UserId
          }
      });
      if(bookmark){
          return res.status(409).send({
              message:'Conflict, Bookmark Already Exists'
          })
      }
      const user = await Bookmark.create(req.body);

      res.status(201).send({
          message:'Bookmark Created',
          user
      })
  } catch (e) {
      console.log(e.message);
  }
};
exports.deleteBookmark = async function(req,res){
    try{
        const {bookmarkId} = req.params;
        const bookmark = await Bookmark.findById(bookmarkId);

        if(bookmark===null || bookmark === undefined){
            return res.status(404).send({
                message:'BookMark Does Not Exist'
            })
        }
        await bookmark.destroy();
        res.status(201).send(bookmark)
    } catch (e) {
        console.log(e.message);
        res.status(500).send({
            message:'Internal Server Error',
            error:e.message
        });
    }
};