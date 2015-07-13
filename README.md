# telepastyv2
Server side of the android pusher app
Served by node.  To serve:
$ node app.js

All traffic (after toobusy ddos check) routed to routes/routes.js
Routes handles routing of the various types of request that can come in from android
requests are routed to appropriate js file in node-modules/config/

Request payloads are JSON

Ported off EC2 to GH  july 13 2015
Cloned from GH to Perforce VM july 13 2015
Pushing to empty GL proj july 13 2015

