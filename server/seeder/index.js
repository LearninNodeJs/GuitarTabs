const {sequelize,Song,User} = require('./models');
const songs = require('./users');
const users = require('./songs');
const Promise = require('bluebird');

sequelize.sync({force:true})
    .then(async ()=>{

    });
