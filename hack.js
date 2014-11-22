
var apiURL = "http://api.idolondemand.com/1/api/sync/detectfaces/v1";  


var sendRequest = function(){
  var xhr = new XMLHttpRequest();

  xhr.onload = reqListener(xhr);

  xhr.open("POST", apiURL, true);

  xhr.send('file=C:\Users\John\Hackathon\Hackathon\my-face.jpg&apikey=31073e76-4d1f-4615-9375-694ebfad9db7');
}

var reqListener = function (xhr) {
  alert(xhr.responseXML);
}

sendRequest();