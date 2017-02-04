var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sessions = require('client-sessions')

var mongoose = require('mongoose')
require('dotenv').config()

var dbUrl = process.env.MONGO_URL
mongoose.connect(dbUrl, function(err){
  if(err){
    console.log('ERROR cannot connect to ' + dbUrl)
  }else{
    console.log('Connected successfully to ' + dbUrl)
  }
})

var index = require('./routes/index');
<<<<<<< HEAD
var api = require('./routes/api');
=======
var account = require('./routes/account');
>>>>>>> 43275179f5858aeda36f2f2dcee77017149782f3

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sessions({
  cookieName: 'session',
  secret: process.env.SESSION_SECRET,
  duration: 24*60*60*1000, // 1 day
  activeDuration:30*60*1000
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
<<<<<<< HEAD
app.use('/api', api);
=======
app.use('/account', account);
>>>>>>> 43275179f5858aeda36f2f2dcee77017149782f3

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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
