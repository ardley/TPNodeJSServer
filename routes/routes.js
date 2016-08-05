var testing = require('config/testing');
var onboarding = require('config/onboarding');
var toobusy = require('toobusy');


//This is the code you get when you do a standard browser GET http call
module.exports = function(app) {
  app.use(function(req, res, next){
        if(toobusy())res.send(503, "I'm tooo busy, maybe a ddos attempt");
        else next();
        });
  app.get('/', function(req, res) {
    res.end("Welcome to ClipHorde.  Please see the kickstarter to help make it go.");
  });


//This is the only part that’s really developed downstream in node_modules, 
//there’s mongo schema and everything.

  app.post('/api/testing', function(req, res) {
    console.log("req.body from routes.js: "+req.body);
    var deviceTypeKey = req.body.deviceType;
    console.log("deviceTypeKey from routes.js: "+deviceTypeKey);
    var installIDKey = req.body.InstallID;
    console.log("installIDKey from routes.js: "+installIDKey);
    var installRHKey = req.body.InstallRandHex;
    console.log("InstallRHKey from routes.js: "+installRHKey);
   
    testing.init_regist(deviceTypeKey,installIDKey,installRHKey, function(found){
      console.log(found);
      res.json(found);
    });
   });



//The plan is to later move all the code to here when it’s tested.  Then make the app 
//post to /onboarding instead of /testing.
  app.post('/api/onboarding', function(req, res) {
    var deviceTypeKey = req.body.deviceType;
    var installIDKey = req.body.InstallID;
    onboarding.init_regist(deviceTypeKey,installIDKey,function(found){
      console.log(found);
      res.json(found);
  });
  });

}

