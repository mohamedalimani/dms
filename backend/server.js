const express = require("express") ; 
const mongoose = require("mongoose") ;
const path = require('path') ;
bodyParser = require('body-parser') ;
cors = require('cors') ;
const app = express() ; 
const port = 3000 ;
const docsRoute = require('./routes/api') ;

// enable cross-origin sharing and ...
app.use(function(req,res,next){
  res.header('access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH') ;
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,content-type,Accept');
  next() ;
})
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({
  extended:false 
})) ;
app.use(cors()) ;    // using cors library and res.header could be wrong cuz maybe they are doing the same thing !
app.use('/api',docsRoute) ;
app.use(express.static(path.join(__dirname,'dist/smart-bookshelf'))) ; //two next lines could be doing the same thing !!
app.use('/',express.static(path.join(__dirname,'dist/smart-bookshelf'))) ; 


mongoose.connect('mongodb://localhost:27017/dms',{useNewUrlParser: true}).then(()=>{console.log('Database successfully connected')},
error => {
  console.log('Database could not connect:' + error) 
}) ;

const server = app.listen(3000,()=>{console.log("server is working correctly on port : "+port)}) ;

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});