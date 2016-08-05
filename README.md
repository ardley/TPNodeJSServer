# telepasteServer
Server side of the android pusher app
Served by node.  To serve:
$ node app.js

All traffic (after toobusy ddos check) is routed to routes/routes.js
Routes handles routing of the various types of request that can come in from android
Requests are routed to the appropriate js file in node-modules/config/

Request payloads are JSON.

Ported off EC2 to GS, GH  july 13 2015

Work is on P4 VM (das), pushing to GS regularly and GH occasionally.
