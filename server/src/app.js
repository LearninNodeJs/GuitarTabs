const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const apiRoutes = require('./router/index');
const app = express();

app.use((req,res,next)=>{
   res.header("Access-Control-Allow-Origin","*");
   res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
   if(req.method === "OPTIONS"){
      res.header('Access-Control-Allow-Methods','PUT, PATCH, POST, DELETE, GET');
      return res.status(200).json({});
   }
   next();
});

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/users/',apiRoutes);

app.use('/',(req,res,)=>{
   res.status(201).json({
       message:'Hello World'
   })
});

app.use((req,res,next)=>{
   const error = new Error('Route Not Found');
   error.status = 404;
   next(error);
});
app.use((err,req,res)=>{
   res.status(err.status || 500);
   res.json({
      err:{
          message:err.message
      }
   });
});

/*Define error Handling for routes */
module.exports = app;