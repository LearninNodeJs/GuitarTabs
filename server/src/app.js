const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

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