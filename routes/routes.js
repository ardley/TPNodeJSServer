var testing = require('config/testing');
var onboarding = require('config/onboarding');
var toobusy = require('toobusy');

module.exports = function(app) {
  app.use(function(req, res, next){
        if(toobusy())res.send(503, "I'm tooo busy, maybe a ddos attempt");
        else next();
        });
  app.get('/', function(req, res) {
    res.end("Welcome to ClipHorde.  Please see the kickstarter to help make it go.");
  });

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

  app.post('/api/onboarding', function(req, res) {
    var deviceTypeKey = req.body.deviceType;
    var installIDKey = req.body.InstallID;
    onboarding.init_regist(deviceTypeKey,installIDKey,function(found){
      console.log(found);
      res.json(found);
  });
  });

}

