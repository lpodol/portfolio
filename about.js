var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response){

fs.readFile(request.url.substr(1, request.url.length), function(err, data){
  response.end(data)
})

//   if (request.url === "/index.html"){
//     fs.readFile("index.html", function(err,data){
//       response.end(data);
//     });
//   }else if (request.url === "/style.css"){
//     fs.readFile("style.css", function(err,data){
//       response.end(data);
//     });
//   }else if (request.url === "/MyFontsWebfontsKit.css"){
//     console.log(request.url)
//       fs.readFile("MyFontsWebfontsKit.css", function(err,data){
//         response.end(data);
//     });
//   }else if (request.url === "/about.html"){
//     fs.readFile("about.html", function(err,data){
//       response.end(data);
//     });
//   }else if (request.url === "/portfolio.html"){
//     fs.readFile("portfolio.html", function(err,data){
//       response.end(data);
//     });
//   }else if (request.url === "/contact.html"){
//     fs.readFile("contact.html", function(err,data){
//       response.end(data);
//     });
//   }else if (request.url === "/chatroom_index.html"){
//     fs.readFile("chatroom_index.html", function(err,data) {
//       response.end(data);
//     });
//   }else{
//     fs.readFile("index.html", function(err,data){
//       response.end(data);
//     });
//   }
// });
server.listen(80);
