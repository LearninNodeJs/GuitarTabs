const {History,Song,User} = require('../model');
const _ = require('lodash');

exports.index = async function(req,res){
    try {
        const userId = req.query.userId;
        const recentlyViewed = History.findAll({
            where:{
                UserId:userId
            },
            include:[
                {
                    model:Song
                }
            ]
        }).map(history => history.toJSON())
            .map(history => _.extend(
                {},
                history.Song,
                history
            ));
        res.status(201).send(recentlyViewed);

    }catch (e) {
        res.status(500).send({
            error:e.message,
            message:'Error Loading Endpoint, Internal Server Error'
        })
    }
};
exports.post = async function(req,res){
  try {
      const {songId, userId} = req.body;
      const newHistoryEntry = await History.create({
          SongId: songId,
          UserId: userId
      });
      res.status(201).send({
          message:'History Recorded',
          newHistoryEntry
      })
  }catch (e) {
      console.log(e.message);
      res.status(500).send({
          message:'Internal Server Error',
          error:e.message
      });
  }
};