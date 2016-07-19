/**
 * Module dependencies.
 */
var express  = require('express');
var connect = require('connect');
var app      = express();
var port     = process.env.PORT || 3000;
var toobusy = require('toobusy');


// Configuration
app.use(function(requ, res, next){
        if (toobusy()) res.send(503, "I'm busy right now, sorry (DDOS attempt likely in progress)");
        else next();
        });

app.use(express.static(__dirname + '/public'));
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());

// Routes
require('./routes/routes.js')(app);
app.listen(port);
console.log('The App runs on port ' + port);


