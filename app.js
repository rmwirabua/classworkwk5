var createError = require('http-errors');
var fs = require('fs');
var express = require('express');
var mongoose = require('mongoose')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require('./_config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { response } = require('express');

var app = express();

function onRequest(req, res) {

//   function fileReader(path, callback) {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             callback(404);
//         } else {
//             callback(200, Buffer.from(data).toString('utf-8'));
//         }
//     })
//     res.end()
// }
  response.writeHead(200,{'content-type':'text/html'});
  fs.readFile('index.html', null, function(error,data){
    if (error) {
      console.log(error)
      res.writeHead(400);
      res.write('file not found');
    } else{
      // console.log(data)
      res.write(data);
      }
    res.end();
  });
}



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', onRequest.bind(this));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// Database Connection
const dbConnectionString = 'mongodb+srv://richardgitonga:1Quality@cluster0.igm2h.mongodb.net/classwork?retryWrites=true&w=majority';
const dbName = 'classwork';
// const MONGODB_URI = process.env.MONGODB_URI || dbConnectionString + dbName;
// mongoose.connect(MONGODB_URI)
const db = mongoose.connection;

const MONGODB_URI = process.env.MONGODB_URI || config.mongoURI[app.settings.env]
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  },(err)=>{
    if (err) {
        console.log(err)
    }else{
        console.log(`Connected to Database: ${MONGODB_URI}`)
    }
});

// Check Connection
db.once('open', () => {
  console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error) => {
  console.error(error);
})


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
