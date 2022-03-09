<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="layout.css">
</head>
<body>
    <h2>JavaScript Target a Class and an ID with an onClick event</h2>
    <p class="change-color" id="change-font">Good morning!</p>
    <p class="new-color">Good evening!</p>
    <button onClick="clickMe()">Click me!</button>
    <button onClick = "document.querySelector('.change-color').style.fontSize='20px';">Click me too!</button>
    
    <h2>JavaScript Error Handling</h2>
    <p>How to use <b>catch</b> to display an error.</p>
    <p id="demo"></p>

    <h2>Another Error Example</h2>
    <p>Please input a number between 5 and 10:</p>
    <input id="demo" type="text">
    <button type="button" onclick="myFunction()">Test Input</button>
    <p id="message"></p>
    

<script>
function clickMe() {
    alert("hello!");
    let newColor=document.querySelector(".change-color").style.color="pink";
    console.log('color of good morning:', newColor)
    document.querySelector(".new-color").style.color="blue";
};

try {
    addalert("Welcome guest!");
}
catch(err) {
    document.querySelector("#demo").innerHTML = err.message;
}

function myFunction() {
    var message, x;
    message = document.querySelector("#message");
    message.innerHTML = "";
    x = document.querySelector("#demo").value;
    try { 
      if(x == "")  throw "is Empty";
      if(isNaN(x)) throw "not a number";
      if(x > 10)   throw "too high";
      if(x < 5)  throw "too low";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
  };
</script
  </body>
</html>