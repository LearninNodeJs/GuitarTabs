const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app');

const server = http.createServer(app);
const {sequelize}  = require('./model');

sequelize.sync({force:false})
    .then(()=>{
        server.listen(port,(err)=>{
            if(!err){
                console.log('Listening on Port ' + port);
            }else{
                console.log('Error Listening to Port' +err.message);
            }
        });
}).catch(error=>{
    console.log('error',error.message);
});

