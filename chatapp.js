var ws = new WebSocket("ws://104.236.70.14:3000");

//Create the page layout.
var body = document.querySelector("body");
var div = document.getElementById("div1");
var ul = document.createElement("ul");
ul.style.listStyle = "none";
div1.appendChild(ul);
//Automatically scrolls on a set interval. Unfortunately makes it difficult to scroll back up. Look into this.

setInterval(function(){
  var elem = div;// just to scroll down the line
  elem.scrollTop = elem.scrollHeight;
},30);

//Getting a message from the server.
ws.addEventListener("message", function(event){
  var item = JSON.parse(event.data);
  var li = document.createElement("li");

  var message = item.message;

  // for (var i = 0; i < array.length; i++){
  //   var string = array[i]
  //   if(string.substring(string.length - 4) === ".png" || string.substring(string.length - 4) === ".bmp" || string.substring(string.length - 4) === ".jpg" || string.substring(string.length - 4) === ".gif"){
  //     var img = ("<img src='" + string + "' width='200' + height='200'>");
  //     array.splice(i, 1, img);
  //   }
  // }

  //Check message for http, make message equal to href instead of string.
  if(message.substring(0,"http".length) === "http"){
    message = "<a href='" + message + "'>" + message + "</a>";
  }

  //Here be some cute things.
  message = message.replace("(bear)", "ˁ˚ᴥ˚ˀ");
  message = message.replace("(bye)", "¸.·´¯`·.´¯`·.¸¸.·´¯`·.¸><(((º>");
  message = message.replace("(cry)", "(╥﹏╥)");
  message = message.replace("(why)", "ლ(ಠ益ಠლ)╯");

  li.innerHTML = item.name  + ": " + "<span>" + message + "</span>"
  ul.appendChild(li);

//Reset the text box to blank.
  textinput.value = "";

// Go through the split message to see if anything is an image.
var array = item.message.split(" ");

array.forEach(function(piclink){
  var length = piclink.length;
  var end_chars = piclink.charAt(length-3) + piclink.charAt(length-2) + piclink.charAt(length-1);
  end_chars = end_chars.toLowerCase();
  if(end_chars === "gif" || end_chars === "jpg" || end_chars === "bmp" || end_chars === "png"){
    var img = document.createElement("img");
    img.src = piclink;
    img.height = 200;
    img.width = 200;
    li.appendChild(img);
  };
});
});

//Sending to and stringifying text and name box input for the server as an object.
var textinput = document.getElementById("textbox");
var nameinput = document.getElementById("namebox");
textinput.addEventListener("keypress", function(event){
  if (event.keyCode === 13){
    ws.send(JSON.stringify({
      name: nameinput.value,
      message: textinput.value
    }));
  };

});
