
var users = [];
var messages = [];

var http = require('http');
var listenPort = 8080;

function handleUsers(req, res) {
    var response = {};
    var parsedURL = require('url').parse(req.url, true);

    switch (parsedURL.query.method) {
        case "GET":
            response =  {users:users};
            break;
        case "POST":
            var user = JSON.parse(parsedURL.query.user);
            user.userID = users.length;
            users.push(user);
            response.status =  "OK";
            break;
        case "PUT":
            var user = JSON.parse(parsedURL.query.user);
            users[user.userID] = user;
            response.status =  "OK";
            break;
        case "DELETE":
            var user = JSON.parse(parsedURL.query.user);
            users.splice(user.userID, 1);
            response.status =  "OK";
            break;
        default:
            console.log("Unknown method: " + req.method);
            response.status =  "ERROR";
    }
    return response;
}

function handleMessages(req, res) {
    var response = {};
    var parsedURL = require('url').parse(req.url, true);
    switch (req.method) {
        case "GET":
            response =  {messages:messages};
            break;
        case "POST":
            var message = JSON.parse(parsedURL.query.message);
            message.messageID = messages.length;
            messages.push(message);
            response.status =  "OK";
            break;
        case "PUT":
            var message = JSON.parse(parsedURL.query.message);
            messages[message.messageID] = message;
            response.status =  "OK";
            break;
        case "DELETE":
            var message = JSON.parse(parsedURL.query.message);
            messages.splice(message.messageID, 1);
            response.status =  "OK";
            break;
        default:
            console.log("Unknown method: " + req.method);
            response.status =  "ERROR";
    }
    return response;
}

function onRequest(req, res) {

    res.writeHead(200, {'Content-type':'text/javascript'});

    var urlParts = require('url').parse(req.url, true);

    var path = urlParts.pathname.replace('/', '');
    var responseObj = {};

    switch(path) {
        case "users":
            responseObj = handleUsers(req, res);
            break;
        case "messages":
            responseObj = handleMessages(req, res);
            break;
        case "login":
            responseObj = {status:"OK"};
            break;
    }

    res.write("var data = " + JSON.stringify(responseObj) + "\n");
    res.write(urlParts.query['callback'] + "(data);\n");
    res.end();
}

var server = http.createServer(onRequest);

server.on('error', function (e) {
    if (e.code == 'EADDRINUSE') {
        console.log('Address in use, retrying...');
        setTimeout(function () {
            server.close();
            startServer();
        }, 100);
    } else {
        console.log('Error: ' + e.toString());
    }
});

function startServer() {
    server.listen(listenPort);
}

startServer();
