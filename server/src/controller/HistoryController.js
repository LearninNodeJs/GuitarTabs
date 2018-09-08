const {History,Song,User} = require('../model');
const _ = require('lodash');
exports.index = async function(req,res){
    try {
        const userId = req.query.userId;
        const recentlyViewed = History.findAll({
            where:{
                UserId:userId
            }
        })
    }catch (e) {
        res.status(500).send({
            error:e.message,
            message:'Error Loading Endpoint'
        })
    }
}