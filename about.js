var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){

  if (request.url === "./index.html"){
    fs.readFile("index.html", function(err,data){
      response.end(data);
    });
  }else if (request.url === "./style.css"){
    fs.readFile("stylesheet.css", function(err,data) {
      response.end(data);
    });
  }else if (request.url === "./about.html"){
    fs.readFile("about.html", function(err,data) {
      response.end(data);
    });
  }else if (request.url === "./portfolio.html"){
    fs.readFile("contact.html", function(err,data) {
      response.end(data);
    });
  }else if (request.url === "./contact.html") {
    fs.readFile("contact.html", function(err,data) {
      response.end(data);
    });
  }else if (request.url === "./chatroom_index.html") {
    fs.readFile("chatroom_index.html", function(err,data) {
      response.end(data);
    })
  }else if (request.url === "./contact.html") {
    fs.readFile("contact.html", function(err,data) {
      response.end(data);
    });;
  };
});

server.listen(80);
