//code for local node server, from https://levelup.gitconnected.com/set-up-and-run-a-simple-node-server-project-38b403a3dc09 
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});

function theFunctionAbout() {
    document.getElementById("thePopupAbout").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");
    
  }

  function theFunctionAboutClose(){
    document.getElementById("thePopupAbout").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
  }

  function theFunctionOld() {
    document.getElementById("thePopupOld").style.visibility="visible";
    document.getElementById("cover").classList.toggle("blur");

  }

  function theFunctionOldClose(){
    document.getElementById("thePopupOld").style.visibility="hidden";
    document.getElementById("cover").classList.toggle("blur");
  }

  // var fs = require('fs');
  // var array = fs.readFileSync('data.txt').toString().split("\n");
  // for(i in array) {
  //     console.log(array[i]);
  // }

  // function checkPlayer(){

  //   let username = document.getElementById("username");
  //   if ()

  // }
